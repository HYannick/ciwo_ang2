import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {SearchMovieService} from "../../services/search.service";
import {ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/map";


@Component({
    selector: 'movie-component',
    templateUrl: './movie.component.html',
    animations: [
        trigger('appear', [
            state('void', style({
                'transform': 'translateY(10%)',
                'opacity' : '0'
            })),
            transition('* => *', animate('.9s'))
        ]),
        trigger('fade', [
            state('void', style({
                'opacity' : '0'
            })),
            transition('* => *', animate('.9s'))
        ])
    ],
    styleUrls: ['./movie.component.css']
})
export class MovieComponent  {
    movie: Object;
    reviews;
    public imgSource = 'https://image.tmdb.org/t/p/w500';
    public imgSourceOriginal = 'https://image.tmdb.org/t/p/w1280';
    constructor( private router: ActivatedRoute, private SearchMovieService: SearchMovieService){}
    ngOnInit(){

        this.router.params.subscribe((params) => {
            const id = params['id'];
            this.SearchMovieService.getMovie(id).subscribe(movie => {
                console.log(movie);
                movie.poster_path = this.imgSource + movie.poster_path;
                movie.backdrop_path = this.imgSourceOriginal + movie.backdrop_path;
                this.movie = movie;
            });
            this.SearchMovieService.getReview(id).subscribe(review => {
                console.log(review.results);
                this.reviews = review.results.slice(0,1);
            })
        })
    }
}
