import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.css']
})
export class TvshowsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $.getJSON("https://api.themoviedb.org/3/tv/popular?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function(object) {
        for (let i = 0; i < 6; i++) {
            addItem(object.results[i], i);
        }
    });


    function addItem(result, index) {
        $("#movieBox").append(`<div class="movie" id="movieDiv${index}">
            <h1>${result.name}</h1>
            <img id="movieImage${index}" src="${getImage(result.poster_path)}" alt="Movie: ${result.name}">
            <p id="movieParagraph${index}">${result.overview}<br />Date First Aired: ${result.first_air_date}</p>
          </div>`);
    }

    function getImage(path) {
        return "https://image.tmdb.org/t/p/w500" + path; 
    }
  }
}
