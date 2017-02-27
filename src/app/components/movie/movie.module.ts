import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {MovieComponent}   from './movie.component';
import {HttpModule} from "@angular/http";
import {SearchMovieService} from "../../services/search.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../../app.routes";
import {MovieCardModule} from "../movie-card/movie-card.module";

@NgModule({
    imports: [CommonModule, HttpModule, RouterModule.forRoot(appRoutes), MovieCardModule],
    exports: [MovieComponent],
    declarations: [MovieComponent],
    providers: [SearchMovieService],
})
export class MovieModule {}
