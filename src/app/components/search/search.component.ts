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
    constructor(private SearchMovieService: SearchMovieService){
        this.SearchMovieService.getPopular().subscribe(res => {
            this.popularMovies = res.results;
        });
    }

    updateMovies(result) {
            this.SearchMovieService.searchMovie(result).subscribe(res => {
                this.results = res.results;
            });

    }

    toLeft(){
        this.moveSlide += 350
    }
    toRight(){
        this.moveSlide -= 350
    }


}
