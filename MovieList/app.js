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
}


// Store Class: Handles Storage

// Event: Display Movies
document.addEventListener('DOMContentLoaded', UI.displayMovies);

// Event: Add a Movie

// Event: Remove a Movie