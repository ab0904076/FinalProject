import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function(object) {
        for (let i = 0; i < 6; i++) {
            addItem(object.results[i], i);
        }
    });


    function addItem(result, index) {
        $("#movieBox").append(`<div class="movie" id="movieDiv${index}">
            <h1>${result.title}</h1>
            <img id="movieImage${index}" src="${getImage(result.poster_path)}" alt="Movie: ${result.title}">
            <p id="movieParagraph${index}">${result.overview}<br /> Release Date: ${result.release_date}</p>
          </div>`);
    }

    function getImage(path) {
        return "https://image.tmdb.org/t/p/w500" + path; 
    }
  }

}
