import { Component, OnInit } from '@angular/core';
import {SearchMovieService} from "../../services/search.service";
import {ActivatedRoute} from '@angular/router';
import "rxjs/add/operator/map";


@Component({
    selector: 'genre-component',
    templateUrl: './genre.component.html',
    styleUrls: ['./genre.component.css']
})
export class GenreComponent  {
    title: string;
    result = [];
    public imgSource = 'https://image.tmdb.org/t/p/w500';
    constructor( private router: ActivatedRoute, private SearchMovieService: SearchMovieService){}

    ngOnInit() {
        this.router.params.subscribe((params) => {
            const id = params['id'];
            this.title = params['name'];
            this.SearchMovieService.getMovieByGenre(id).subscribe(res => {
                this.result = res.results;
                this.result.map(img => {
                    img.poster_path = this.imgSource + img.poster_path;
                    img.backdrop_path = this.imgSource + img.backdrop_path;
                })
            })
        })
    }

}
