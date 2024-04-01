'use strict';

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class Workout {
  date = new Date();
  id = this.#uniqueId();

  constructor(coords, distance, duration) {
    this.coords = coords; //[lat,lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  #uniqueId() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const secureRandomId = array[0];
    return secureRandomId;
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type === 'running' ? 'Running' : 'Cycling'} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevGain) {
    super(coords, distance, duration);
    this.elevGain = elevGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

///////////////////////////////////////////////
// Application Architecture

class App {
  #map;
  #mapZoom = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    this.#getPosition();
    this.#getLocalStorageData();

    form.addEventListener('submit', this.#newWorkout.bind(this));
    inputType.addEventListener('change', this.#toggleElevationField);
    containerWorkouts.addEventListener('click', this.#moveToPopUp.bind(this));
  }

  #getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.#loadMap.bind(this), () => {
        alert('Unable to get your location');
      });
    }
  }

  #loadMap(position) {
    const { latitude, longitude } = position.coords;

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.in/copyright">OpenStreetMap India Contributors</a>',
    }).addTo(this.#map);

    // handling click on the map
    this.#map.on('click', this.#showForm.bind(this));

    this.#workouts.forEach(work => {
      this.#renderWorkoutMarker(work);
    });
  }

  #showForm(e) {
    this.#mapEvent = e;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  #hideForm() {
    // Clear Input Fields
    inputDistance.value =
      inputDuration.value =
      inputDistance.value =
      inputCadence.value =
      inputElevation.value =
        '';

    // Hide the form
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  #toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  #newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    //Get Data from the form

    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    //If workout is running, then create running object

    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Validate the data
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      ) {
        return alert('Please enter a valid input');
      }

      // Creating Running Object

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout is cycling, then create cycling object
    if (type === 'cycling') {
      const elevGain = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevGain) ||
        !allPositive(distance, duration)
      ) {
        return alert('Please enter a valid input');
      }
      workout = new Cycling([lat, lng], distance, duration, elevGain);
    }

    // Add new obeject to the  workout array
    this.#workouts.push(workout);

    // Render on Map as marker
    this.#renderWorkoutMarker(workout);

    //  Render workout on list
    this.#renderWorkoutList(workout);

    // Hide Form and clear field
    this.#hideForm();

    // Set local storage to add the workout
    this.#setLocalStorage();
  }
  // Render Workout

  #renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  #renderWorkoutList(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
    <h2 class="workout__title">${workout.description}</h2>
    <div class="workout__details">
      <span class="workout__icon">${
        workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
      }</span>
      <span class="workout__value">${workout.distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${workout.duration}</span>
      <span class="workout__unit">min</span>
    </div>       
`;

    if (workout.type === 'running') {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
    </li>
      `;
    }

    if (workout.type === 'cycling') {
      html += `
      <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevGain}</span>
      <span class="workout__unit">m</span>
    </div>
    </li>
      `;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  #moveToPopUp(e) {
    const workoutEle = e.target.closest('.workout');

    if (!workoutEle) return;

    const workoutId = Number(workoutEle.dataset.id);

    const workout = this.#workouts.find(work => work.id === workoutId);

    this.#map.setView(workout.coords, this.#mapZoom + 1, {
      animate: true,
      pan: {
        duration: 1,
      },
    });
  }

  #setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  #getLocalStorageData() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => this.#renderWorkoutList(work));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
