// Movie Class: Represents a Movie
class Movie{
    constructor(title, director, year){
        this.title = title;
        this.director = director;
        this.year = year;
    }
}

// UI Class: Handle UI Tasks
class UI{
    static displayMovies(){

        /* How it was before the Local Storage works
        const StoredMovies = [
            {
                title: 'Don\'t Look Up',
                director: 'Adam McKay',
                year: '2021'
            },
            {
                title: 'Luca',
                director: 'Enrico Casarosa',
                year: '2021'
            }
        ];

        const movies = StoredMovies;
        */
        const movies = Store.getMovies();

        movies.forEach( (movie) => UI.addMovieToList(movie) );
    }

    static addMovieToList(movie){
        const list = document.getElementById('movie-list');

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${movie.title}</td>
            <td>${movie.director}</td>
            <td>${movie.year}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete"></td>
        `;

        list.appendChild(row);
    }

    static deleteMovie(target){
        if( target.classList.contains('delete') ){
            // removing the entire <tr> witch elements that contains 'delete' in <tbody>.
            // the target witch contains the 'delete' is a <a>. The parent is <td>, and the parent again is the <tr>.
            target.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;

        div.appendChild(document.createTextNode(message));

        const container = document.getElementById('container');
        const form = document.getElementById('movie-form');
        // Inserting div before form in container
        container.insertBefore(div, form);

        // Vanish in 3 seconds
        setTimeout( () => document.querySelector('.alert').remove(), 3000 );
    }

    static clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('director').value = '';
        document.getElementById('year').value = '';
    }
}


// Store Class: Handles Storage
class Store{
    static getMovies(){
        let movies;
        if( localStorage.getItem('movies') === null ){
            movies = [];
        } else{
            movies = JSON.parse(localStorage.getItem('movies'));       
        }
        return movies;
    }

    static addMovie(movie){
        const movies = Store.getMovies();

        movies.push(movie);

        localStorage.setItem('movies', JSON.stringify(movies));
    }

    static removieMovie(year){
        const movies = Store.getMovies();

        movies.forEach( (movie, index) =>
        {
            if( movie.year === year ){
                movies.splice(index, 1);
            }
        });

        localStorage.setItem('movies', JSON.stringify(movies));
    }
}

// Event: Display Movies
document.addEventListener('DOMContentLoaded', UI.displayMovies);

// Event: Add a Movie
document.getElementById('movie-form').addEventListener('submit', (e) => {
    // Prevent actual submit
    e.preventDefault();

   // Get form values
   const title = document.getElementById('title').value;
   const director = document.getElementById('director').value;
   const year = document.getElementById('year').value;

   // Validate
   if( title === '' || director === '' || year === ''  ){
        UI.showAlert('Please fill in all fields', 'danger');
   } else{
        //Instance of Movie Class
        const movie = new Movie(title, director, year);

        // Add Movie to UI
        UI.addMovieToList(movie);

        // Add Movie to Store
        Store.addMovie(movie);

        // Show success message
        UI.showAlert('Book Added', 'success');

        // Clear fields
        UI.clearFields();
   }
});

// Event: Remove a Movie
document.getElementById('movie-list').addEventListener('click', (e) => {
    // Remove Movie from UI
    UI.deleteMovie(e.target);

    // Remove Movie from Store
    // The parameter is the <td> of year. Its the sibling of <td> that contains the tag <a> with 'delete'.
    Store.removieMovie(e.target.parentElement.previousElementSibling.textContent);

    // Show success message
    UI.showAlert('Book Removed', 'success');
});
