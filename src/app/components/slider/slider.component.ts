import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import {SearchMovieService} from "../../services/search.service";
import "rxjs/add/operator/map";


@Component({
    selector: 'slider-component',
    templateUrl: './slider.component.html',
    animations:[
        trigger('fadeZoom',[
            state('void', style({
                'opacity' : '0',
                'transform': 'scale(1.1)'
            })),
            transition('* => *', animate('.9s ease-in-out'))
        ]),
        trigger('fade',[
            state('void', style({
                'opacity' : '0',
            })),
            transition('* => *', animate('.9s ease-in-out'))
        ])
    ],
    styleUrls: ['./slider.component.css'],

})
export class SliderComponent  {
    public results = [];
    //public imgSource = 'https://image.tmdb.org/t/p/original';
    triggerSlider;
    constructor(private SearchMovieService: SearchMovieService){
        this.SearchMovieService.getUpcoming().subscribe(res => {
            let n = 0;
            const limit = 4;
            const initSlide = () => {
                this.results = res.results.slice(n,n+1);
                (n === limit) ? n=0 : n+=1;
            };
            initSlide();
            this.triggerSlider = setInterval(initSlide , 6000);

        });
    }
}
