// Get Movies.json
var moviesJSON = require('../movies.json');
var movies = moviesJSON.movies;
// Get Books.json
var booksJSON = require('../books.json');
var books = booksJSON.books;




//Routes

// Home
exports.home = function(req,res){
  res.render('home', {
    title: "Star Wars Movies",
    movies: movies,
    books: books
  });
};

// Movie Single
exports.movie_single = function(req,res){
  var episodenumber = req.params.episodenumber;
  var movie = movies[episodenumber - 1];
  var title = movie.title;
  var main_characters = movie.main_characters;
  if(episodenumber >= 1 && episodenumber <= 9){
    res.render('movie_single', {
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters,
      books: books
    });
}else{
    res.render('notFound', {
      movies: movies,
      title: "This is not the page you are looking for - Obi Wan",
      books: books
    });
}
};

// Books
exports.books = function(req, res){
  var movies = moviesJSON.movies;
  var books = booksJSON.books;
  res.render('books', {
    movies: movies,
    title: "Star Wars Books",
    books: books
  });
};

// Books Single
exports.book_single = function(req, res){
  var episodenumber = req.params.episodenumber;
  var cannon_number = req.params.cannon_number;
  var movies = moviesJSON.movies;
  var movie = movies[episodenumber - 1];
  var books = booksJSON.books;
  var book = books[cannon_number - 1];
  var title = books.title;
  res.render('book_single', {
    movies: movies,
    movie: movie,
    title: title,
    books: books,
    book: book
  });
};

// Not Found - 404
exports.notFound = function(req,res){
  var movies = moviesJSON.movies;
  res.render('notFound', {
    movies: movies,
    title: "This is not the page you are looking for - Obi Wan"
  });
};
