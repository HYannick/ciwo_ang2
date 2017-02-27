import {Component, OnInit, trigger, state, style, transition, animate} from '@angular/core';
import {SearchMovieService} from "../../services/search.service";
import {ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/map";
import {DomSanitizer} from "@angular/platform-browser";


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
    cast: Array<Object>;
    mainPicture : Array<Object>;
    images : Array<Object>;
    videos : Object;
    similarMovies : Array<Object>;
    public sanitizer : DomSanitizer;
    constructor( private router: ActivatedRoute, private SearchMovieService: SearchMovieService){}
    ngOnInit(){

        this.router.params.subscribe((params) => {
            const id = params['id'];
            this.SearchMovieService.getMovie(id).subscribe(movie => {
                this.movie = movie;
            });
            this.SearchMovieService.getReview(id).subscribe(review => {
                this.reviews = review.results.slice(0,1);
            });
            this.SearchMovieService.getMovieCredits(id).subscribe(res => {
                this.cast = res.cast.slice(0,4);
            });
            this.SearchMovieService.getMovieImages(id).subscribe(res => {
                this.mainPicture = res.backdrops.slice(5,6);
            });
            this.SearchMovieService.getMovieImages(id).subscribe(res => {
                this.images = res.backdrops.slice(0,10);
            });
            this.SearchMovieService.getSimilarMovies(id).subscribe(res => {
                console.log(res.results.slice(0,10));
                this.similarMovies = res.results.slice(0,6);
            });
           /*this.SearchMovieService.getMovieTrailer(id).subscribe(res => {
                this.videos = res.results[0];
                console.log(this.videos);
                this.videos['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.videos['key']);
            })*/
        })
    }
}
