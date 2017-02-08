import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {SearchComponent}   from './search.component';
import {HttpModule} from "@angular/http";
import {SearchMovieService} from "../../services/search.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../../app.routes";
import {LazyLoadImageModule} from "ng2-lazyload-image";
import {MovieCardModule} from "../movie-card/movie-card.module";
import {SliderModule} from "../slider/slider.module";


@NgModule({
    imports: [CommonModule, HttpModule, RouterModule.forRoot(appRoutes), LazyLoadImageModule, MovieCardModule, SliderModule],
    exports: [SearchComponent],
    declarations: [SearchComponent],
    providers: [SearchMovieService],
})
export class SearchModule {}
