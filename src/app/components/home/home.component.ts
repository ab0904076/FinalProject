import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() parent:any;
  constructor() {

   }

  ngOnInit() {
    var parentComp = this.parent;
    $.getJSON("https://api.themoviedb.org/3/movie/popular?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function(object) {
        for (let i = 0; i < 1; i++) {
          addMovie(object.results[i]);
        }
    });

    $.getJSON("https://api.themoviedb.org/3/tv/popular?api_key=54400abc068adca7102fee24733fbc06&language=en-US&page=1", function(object) {
        for (let i = 0; i < 1; i++) {
          addTvShow(object.results[i]);
        }
    });


    function addMovie(result) {
        $("#homeInfo").append(`<div class="movie" id="movieDiv"><h1>${result.title}</h1><img id="movieImage" src="${getImage(result.poster_path)}" alt="Movie: ${result.title}"></div>`);
        $("#movieDiv").click(function(){
          parentComp.toggleMovie();
        });
    }

    function addTvShow(result) {
      $("#homeInfo").append(`<div class="movie" id="tvDiv"><h1>${result.name}</h1><img id="tvImage" src="${getImage(result.poster_path)}" alt="Movie: ${result.name}"></div>`);
      $("#tvDiv").click(function(){
        parentComp.toggleTvShow();
      });
  }
 
    function getImage(path) {
        return "https://image.tmdb.org/t/p/w500" + path; 
    }
  }
}
