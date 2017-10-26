// Get Movies.json
var moviesJSON = require('../movies.json');

//Routes

// Home
exports.home = function(req,res){
  var movies = moviesJSON.movies;
  res.render('home', {
    title: "Star Wars Movies",
    movies: movies
  });
};

// Movie Single
exports.movie_single = function(req,res){
  var episodenumber = req.params.episodenumber;
  var movies = moviesJSON.movies;

  if(episodenumber >= 1 && episodenumber <= 9){
    var movie = movies[episodenumber - 1];
    var title = movie.title;
    var main_characters = movie.main_characters;
    res.render('movie_single', {
      movies: movies,
      title: title,
      movie: movie,
      main_characters: main_characters
    });
}else{
    res.render('notFound', {
      movies: movies,
      title: "This is not the page you are looking for - Obi Wan"
    });
}
};

// Not Found - 404
exports.notFound = function(req,res){
  var movies = moviesJSON.movies;
  res.render('notFound', {
    movies: movies,
    title: "This is not the page you are looking for - Obi Wan"
  });
};
