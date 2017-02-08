import { Component, OnInit } from '@angular/core';
import { SearchMovieService } from './services/search.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  genres;
  constructor(private SearchMovieService: SearchMovieService){
    this.SearchMovieService.getGenre().subscribe(res => {
      this.genres = res.genres;
    })
  }

}
