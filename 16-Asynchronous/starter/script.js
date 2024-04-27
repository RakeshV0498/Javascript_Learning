'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}", alt="${
    data.flags.alt
  }" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 10000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(
              data.languages
            ).join(', ')}</p>
            <p class="country__row"><span>💰</span>${Object.values(
              data.currencies
            )
              .map(currency => currency.name)
              .join(', ')}              
            </p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = msg => {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

// Get Country  Data - First Ajax call

// function getCountryData(country) {
//   const apiURL = `https://restcountries.com/v3.1/name/${country}`;

//   const request = new XMLHttpRequest();

//   request.open('GET', apiURL);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//   });
// }

// getCountryData('India');
// getCountryData('USA');

// two ajax call in single function - callback hell

// function getCountryDataAndNeighbour(country) {
//   const apiURL = `https://restcountries.com/v3.1/name/${country}`;

//   const request = new XMLHttpRequest();

//   request.open('GET', apiURL);

//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data, '');

//     // Get neighbour country (2)
//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     const apiURL2 = `
//     https://restcountries.com/v3.1/alpha/${neighbour}`;

//     const request2 = new XMLHttpRequest();

//     request2.open('GET', apiURL2);

//     request2.send();

//     request2.addEventListener('load', function () {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     });
//   });
// }

// getCountryDataAndNeighbour('India');

// getCountryDataAndNeighbour('bangladesh');

// getCountryDataAndNeighbour('Canada');

// Using Fetch to make Ajax call

// const getCountryData = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //Fetch will returmn a response as promise
//     .then(response => response.json())
//     // Then we resolve the promise as response and conver the promise to json, which will also return a promise
//     .then(data => renderCountry(...data));
//   // again we will use then to resolve the promise and Finally we will get the data
// };

// getCountryData('USA');

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok)
      throw new Error(
        `${errorMsg} (${response.status} - ${response.statusText})`
      );
    return response.json();
  });
};

const getCountryDataAndNeighbour = function (country) {
  return getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    'Country not found'
  )
    .then(data => {
      const countryData = data[0];
      renderCountry(countryData);
      const neighbour = countryData.borders?.[0];
      if (!neighbour) throw new Error(`No Neigbbour found for ${country}`);
      // Get Country 2
      return getJSON(
        ` https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country Not Found'
      );
    })
    .then(data => renderCountry(...data, 'neighbour'))
    .catch(err => {
      console.error(err);
      renderError(`Something went wrong  ${err.message}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// const getCountryDataAndNeighbour = country => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     //Fetch will returmn a response as promise
//     .then(response => {
//       if (!response.ok)
//         throw new Error(
//           `Country not found (${response.status} - ${response.statusText})`
//         );
//       return response.json();
//     })
//     // Then we resolve the promise as response and conver the promise to json, which will also return a promise
//     .then(data => {
//       const countryData = data[0];
//       renderCountry(countryData);
//       const neighbour = countryData.borders?.[0];
//       // if (!neighbour) return;
//       return fetch(`
//       https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//       console.log(response);
//       if (!response.ok || response === undefined)
//         throw new Error(
//           `Country not found (${response.status} - ${response.statusText})`
//         );
//       return response.json();
//     })
//     .then(data => renderCountry(...data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong  ${err.message}`);
//     })
//     .finally((countriesContainer.style.opacity = 1));
//   // again we will use then to resolve the promise and Finally we will get the data
// };

btn.addEventListener('click', () => {
  getCountryDataAndNeighbour('Australia');
});
