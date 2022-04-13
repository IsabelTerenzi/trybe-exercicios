const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

const authorBornIn1947 = books.find((book) => book.author.birthYear === 1947)
  .author.name;

const getNamedBook = books.find((book) => book.name.length === 26).name;

const booksOrderedByReleaseYearDesc = books.sort(
  (bookA, bookB) => bookB.releaseYear - bookA.releaseYear
);

const everyoneWasBornOnSecXX = books.every(
  (book) => book.author.birthYear > 1900 && book.author.birthYear <= 2000
);

const someBookWasReleaseOnThe80s = books.some(
  (book) => book.releaseYear >= 1980 && book.releaseYear < 1990
);

//const authorUnique = books.every((book1, book2) => book1.author.birthYear === book2.author.birthYear);

const formatedBookNames = books.map(
  (book) => `${book.name} - ${book.genre} - ${book.author.name}`
);

const nameAndAge = books
  .map((book) => ({
    age: book.releaseYear - book.author.birthYear,
    author: book.author.name,
  }))
  .sort((a, b) => a.age - b.age);

const fantasyOrScienceFiction = books.filter(
  (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
);

const oldBooksOrdered = books
  .filter((book) => 2022 - book.releaseYear > 60)
  .sort((book1, book2) => book1.releaseYear - book2.releaseYear);

const fantasyOrScienceFictionAuthors = books
  .filter(
    (book) => book.genre === "Ficção Científica" || book.genre === "Fantasia"
  )
  .map((book) => book.author.name)
  .sort();

const oldBooks = books
  .filter((book) => 2022 - book.releaseYear > 60)
  .map((book) => book.name);

const authorWith3DotsOnName = books.find(
  (book) =>
    book.author.name[1] === "." &&
    book.author.name[4] === "." &&
    book.author.name[7] === "."
).name;

const arrays = [["1", "2", "3"], [true], [4, 5, 6]];
const flatten = arrays.reduce((acc, array) => [acc + array]);

const reduceNames = books.reduce(
  (acumulador, book) => `${acumulador} ${book.author.name}`,
  ""
);

const averageAge = books.reduce(
  (acc, book) =>
    acc + (book.releaseYear - book.author.birthYear) / books.length,
  0
);

const longestNamedBook = books.reduce((acc, book) =>
  acc.name.length > book.name.length ? acc : book
);

const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

const containsA = names.reduce(
  (acc, nome) => (nome === "a" || nome === "A" ? acc + 1 : acc),
  0
);

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = students.map((student, index) => ({
  name: student,
  average: grades[index].reduce((acc, nota) => acc + nota) / grades[index].length,
}));

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Maçã', 'Laranja'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Leite ninho', 'Granola'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userJob = {
  ...user,
  ...jobInfos
};
//console.log(userJob);
const printUserJob = ({ name, age, nationality, profession, squad, squadInitials }) => {
  console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} amd my squad is ${squadInitials} ${squad}`)
};
//printUserJob(userJob);

const person = {
  name: 'João',
  lastName: 'Jr',
  age: 34,
};

const { nationality = 'Brazilian'} = person;

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

  const multiply = (number, value = 1) => {
    return number * value;
  };
  
  console.log(multiply(8));