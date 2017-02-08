import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SliderComponent}   from './slider.component';
import {HttpModule} from "@angular/http";
import {SearchMovieService} from "../../services/search.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../../app.routes";
import {LazyLoadImageModule} from "ng2-lazyload-image";
import {MovieCardModule} from "../movie-card/movie-card.module";
import {SliderDirective} from "../../directives/slider.directive";


@NgModule({
    imports: [CommonModule, HttpModule, RouterModule.forRoot(appRoutes), LazyLoadImageModule, MovieCardModule],
    exports: [SliderComponent],
    declarations: [SliderComponent, SliderDirective],
    providers: [SearchMovieService],
})
export class SliderModule {}
