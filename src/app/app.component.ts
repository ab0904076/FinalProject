import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public showHome:boolean = true;
  public showMovie:boolean = false;
  public showTvShow:boolean = false;

  toggleHome() {
    this.showHome = true;
    this.showMovie = false;
    this.showTvShow = false;
  }

  toggleMovie() {
    this.showHome = false;
    this.showMovie = true;
    this.showTvShow = false;
  }

  toggleTvShow() {
    this.showHome = false;
    this.showMovie = false;
    this.showTvShow = true;
  }
}
