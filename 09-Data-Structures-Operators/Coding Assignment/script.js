'use strict';

const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: [
      'computer science',
      'programming',
      'algorithms',
      'data structures',
      'java',
      'math',
      'software',
      'engineering',
    ],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13,
      },
    },
    highlighted: true,
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: [
      'Harold Abelson',
      'Gerald Jay Sussman',
      'Julie Sussman (Contributor)',
    ],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: [
      'computer science',
      'programming',
      'javascript',
      'software',
      'engineering',
    ],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0,
      },
    },
    highlighted: true,
  },
  {
    title: "Computer Systems: A Programmer's Perspective",
    author: ['Randal E. Bryant', "David Richard O'Hallaron"],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: [
      'computer science',
      'computer systems',
      'programming',
      'software',
      'C',
      'engineering',
    ],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16,
      },
    },
    highlighted: true,
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: [
      'computer science',
      'operating systems',
      'programming',
      'software',
      'C',
      'Java',
      'engineering',
    ],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65,
      },
    },
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6,
      },
    },
    highlighted: true,
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090,
      },
    },
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: [
      'computer science',
      'compilers',
      'engineering',
      'interpreters',
      'software',
      'engineering',
    ],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0,
      },
    },
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808,
      },
    },
    highlighted: true,
  },
];

// Task 1
console.log(`------------------Task 1 --------------`);
const [firstBook, secondBook] = books;

console.log(firstBook, secondBook);

// task 2
console.log(`------------------Task 2 --------------`);

const [, , thirdBook] = books;

console.log(thirdBook);

console.log(`------------------Task 3 --------------`);

const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;

console.log(rating, ratingsCount);

console.log(`------------------Task 4 --------------`);

const ratingStars = [63405, 1808];

const [fiveRatings, oneRatings, threeRatings = 0] = ratingStars;

console.log(fiveRatings, oneRatings, threeRatings);

console.log(`------------------Task 5 --------------`);

const { title, author, ISBN } = books[0];

console.log(title, author, ISBN);

console.log(`------------------Task 6 --------------`);

const { keywords: tags } = books[0];

console.log(tags);

console.log(`------------------Task 7 --------------`);

const { language, programmingLanguage = 'unknown' } = books[6];

console.log(language, programmingLanguage);

console.log(`------------------Task 8 --------------`);

let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);

console.log(bookTitle, bookAuthor);

console.log(`------------------Task 9 --------------`);

const {
  thirdParty: {
    goodreads: { rating: bookRating },
  },
} = books[0];

console.log(bookRating);

console.log(`------------------Task 10 --------------`);

const printBookInfo = ({ title, author, year = 'Unknown' }) => {
  console.log(`${title} by ${author},  ${year}`);
};

printBookInfo({
  title: books[0].title,
  author: books[0].author,
  year: books[0].year,
});

console.log(`------------------Task 11 --------------`);

const bookAuthors = [...books[0].author, ...books[1].author];

console.log(bookAuthors);

function spellWord(str) {
  console.log(...str);
}

spellWord('hello');

console.log(`------------------Task 12 --------------`);

const [mainKeyword, ...rest] = books[0].keywords;

console.log(mainKeyword, rest);

console.log(`------------------Task 13 --------------`);

const { publisher: bookPublisher, ...restOfTheBook } = books[1];

console.log(bookPublisher, restOfTheBook);

console.log(`------------------Task 14 --------------`);

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Rakesh', 'Jonas');

console.log(`------------------Task 15 --------------`);

function hasExamplesInJava(book) {
  return book.programmingLanguage === 'Java' || 'no data available';
}

console.log(hasExamplesInJava(books[1]));

console.log(`------------------Task 16 --------------`);

books.map(book => {
  book.onlineContent &&
    console.log(book.onlineContent && `${book.title} has online content`);
});

console.log(`------------------Task 17 --------------`);

books.forEach(book => {
  book.onlineContent ??
    console.log(`${book.title} provides no data about its online content`);
});

console.log(`------------------Task 18 --------------`);

books.forEach(book => {
  book.edition ||= 1;
});

console.log(`------------------Task 19 --------------`);

books.forEach(book => {
  book.highlighted &&= !(book.thirdParty.goodreads.rating < 4.2);
});

console.log(`------------------Task 20 --------------`);

let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}

console.log(pageSum);

console.log(`------------------Task 21 --------------`);

let allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'object') {
    allAuthors.push(...book.author);
  } else {
    allAuthors.push(book.author);
  }
}

console.log(allAuthors);

console.log(`------------------Task 21 --------------`);

for (const [num, author] of allAuthors.entries()) {
  console.log(`${num + 1}. ${author}`);
}

console.log(`------------------Task 22 --------------`);

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

const newBook = {
  [bookData[0][0]]: bookData[0][1],
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};

console.log(newBook);

console.log(`------------------Task 23 --------------`);

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  pages,
};

console.log(newBook2);

console.log(`------------------Task 24 --------------`);

function getFirstKeyword(book) {
  console.log(book.keywords?.[0]);
}

getFirstKeyword(books[0]);
getFirstKeyword(newBook2);

console.log(`------------------Coding Challenge# 1 --------------`);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log(`---------------Task 1-------------------`);

// const players1 = game.players[0];
// const players2 = game.players[1];

const [players1, players2] = game.players;

console.log(players1, players2);

console.log(`---------------Task 2-------------------`);

const [gk, ...fieldPlayers] = players1;
const [gk1, ...fieldPlayers1] = players2;

console.log(gk, fieldPlayers);
console.log(gk1, fieldPlayers1);

console.log(`---------------Task 3-------------------`);

const allPlayers = [...players1, ...players2];

console.log(allPlayers);

console.log(`---------------Task 4-------------------`);

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

console.log(players1Final);

console.log(`---------------Task 5-------------------`);

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

console.log(`---------------Task 6-------------------`);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored `);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

console.log(`---------------Task 7-------------------`);

team1 < team2 && console.log(`Team 1 is likely to win`);
team2 < team1 && console.log(`Team 2 is likely to win`);

console.log(`------------------Coding Challenge# 2 --------------`);

console.log(`---------------Task 1-------------------`);

for (const [goalNo, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalNo + 1}: ${playerName}`);
}
console.log(`---------------Task 2-------------------`);

let sum = 0;
let count = Object.values(game.odds).length;
for (const odd of Object.values(game.odds)) {
  sum += odd;
}

const average = sum / count;

console.log(average);

console.log(`---------------Task 3-------------------`);

const properties = Object.entries(game.odds);

console.log(properties);

for (const [key, value] of properties) {
  let message = '';

  // if (key === 'team1') {
  //   message = `Odd of victory ${game.team1}`;
  // } else if (key === 'team2') {
  //   message = `Odd of victory ${game.team2}`;
  // } else if (key === 'x') {
  //   message = `Odd of draw`;
  // }
  const teamstr = key === 'x' ? 'Draw' : `victory ${game[key]}`;
  console.log(`Odd of ${teamstr}: ${value}`);
}

console.log(`------------------Coding Challenge# 3 --------------`);

console.log(`---------------Task 1-------------------`);

const events = [...new Set(gameEvents.values())];

console.log(events);

console.log(`---------------Task 2-------------------`);

gameEvents.delete(64);

console.log(gameEvents);

console.log(`---------------Task 3-------------------`);

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

console.log(`---------------Task 4-------------------`);

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'First' : 'Second';
  console.log(`[${half} Half] ${min}:${event}`);
}

console.log(`------------------Coding Challenge# 4 --------------`);

function createVariableName(name) {
  const [str1, str2] = name.toLowerCase().trim().split('_');
  const updatedStr2 = str2.replace(str2[0], str2[0].toUpperCase());
  return str1 + updatedStr2;
}

function handleButtonClick() {
  const text = document.querySelector('#txt-area').value;
  const txtArr = text.split('\n');
  const icon = '✅';
  txtArr.forEach((value, index) => {
    index += 1;
    console.log(createVariableName(value).padEnd(20, ' '), icon.repeat(index));
  });
}

const txtArea = document.createElement('textarea');
txtArea.setAttribute('id', 'txt-area');
document.body.append(txtArea);

const btn = document.createElement('button');
btn.setAttribute('id', 'btn');
btn.textContent = 'Submit';
document.body.append(btn);

btn.addEventListener('click', handleButtonClick);

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const rows = flights.split('+');

rows.forEach(value => {
  const [entry, src, des, time] = value.split(';');

  const formattedEntry = entry.split('_').join(' ').trim();
  // const formattedEntry = entry.replaceAll('_', ' ').trim();

  const formattedSrc = src.slice(0, 3).toUpperCase();

  const formattedDes = des.slice(0, 3).toUpperCase();

  const formattedTime = `(${time.replace(':', 'H')})`;

  console.log(
    `${
      formattedEntry.startsWith('Delayed')
        ? '🔴 ' + formattedEntry
        : formattedEntry
    } from ${formattedSrc} to ${formattedDes} ${formattedTime}`.padStart(
      45,
      ' '
    )
  );
});
