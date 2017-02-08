import {Component, trigger, state, style, transition, animate} from '@angular/core';
import {SearchMovieService} from "../../services/search.service";

import "rxjs/add/operator/map";


@Component({
    selector: 'search-component',
    templateUrl: './search.component.html',
    animations: [
        trigger('appear', [
            state('void', style({
                'transform': 'translateY(10%)',
                'opacity' : '0.2'
            })),
            transition('* <=> *', animate('.9s ease-out'))
        ])
    ],
    styleUrls: ['./search.component.css']
})
export class SearchComponent  {
    public popularMovies = [];
    public results = [];
    moveSlide = 0;
    genres;
    public imgSource = 'https://image.tmdb.org/t/p/w500';
    offset = 100;
    defaultImage : string = "https://www.placecage.com/1000/1000";
    errorImage : string = "https://i.imgur.com/XkU4Ajf.png";
    constructor(private SearchMovieService: SearchMovieService){
        this.SearchMovieService.getPopular().subscribe(res => {
            this.popularMovies = res.results;
            this.popularMovies.map(img => {
                img.poster_path = this.imgSource + img.poster_path;
            });
        });
    }

    updateMovies(result) {
            this.SearchMovieService.searchMovie(result).subscribe(res => {
                this.results = res.results;
                this.results.map(img => {
                    img.poster_path = this.imgSource + img.poster_path;
                    img.backdrop_path = this.imgSource + img.backdrop_path;
                })
            });

    }

    toLeft(){
        this.moveSlide += 350
    }
    toRight(){
        this.moveSlide -= 350
    }


}
