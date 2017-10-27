var express = require('express');

var app = express();

var routes = require('./routes');

app.set('view engine', 'ejs');

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Routes

// Home
app.get('/', routes.home);

// Movie Single
app.get('/starwars_episode/:episodenumber?', routes.movie_single);

// Books
app.get('/books', routes.books);

// Movie Single
app.get('/books/:cannon_number?', routes.book_single);

// Not Found - 404
app.get('*', routes.notFound);

app.listen(3000, function(){
  console.log("The application is running on localhost:3000");
});
