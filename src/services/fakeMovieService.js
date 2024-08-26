import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    like: true,
    publishDate: "2018-01-03T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471827",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471828",
    title: "Get Out",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 8,
    dailyRentalRate: 3.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471829",
    title: "Trip to Italy",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182a",
    title: "Airplane",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182b",
    title: "Wedding Crashers",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182c",
    title: "Gone Girl",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 7,
    dailyRentalRate: 4.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182d",
    title: "The Sixth Sense",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182e",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd47182f",
    title: "Inception",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: 3.0,
    like: false,
    publishDate: "2010-07-16T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471830",
    title: "The Matrix",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.8,
    like: false,
    publishDate: "1999-03-31T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471831",
    title: "The Godfather",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Drama" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
    like: false,
    publishDate: "1972-03-24T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471832",
    title: "Pulp Fiction",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Drama" },
    numberInStock: 4,
    dailyRentalRate: 3.7,
    like: false,
    publishDate: "1994-10-14T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471833",
    title: "The Dark Knight",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 10,
    dailyRentalRate: 3.9,
    like: false,
    publishDate: "2008-07-18T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471834",
    title: "Schindler's List",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Drama" },
    numberInStock: 3,
    dailyRentalRate: 4.5,
    like: false,
    publishDate: "1993-12-15T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471835",
    title: "The Lord of the Rings: The Return of the King",
    genre: { _id: "5b21ca3eeb7f6fbccd471819", name: "Fantasy" },
    numberInStock: 6,
    dailyRentalRate: 4.0,
    like: false,
    publishDate: "2003-12-17T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471836",
    title: "Forrest Gump",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Drama" },
    numberInStock: 8,
    dailyRentalRate: 3.6,
    like: false,
    publishDate: "1994-07-06T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471837",
    title: "Fight Club",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Drama" },
    numberInStock: 5,
    dailyRentalRate: 3.9,
    like: false,
    publishDate: "1999-10-15T19:04:28.809Z",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471838",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 9,
    dailyRentalRate: 3.8,
    like: false,
    publishDate: "2012-05-04T19:04:28.809Z",
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find((m) => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find((g) => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find((m) => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
