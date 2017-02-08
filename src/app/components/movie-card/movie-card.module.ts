import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {SearchMovieService} from "../../services/search.service";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../../app.routes";
import {MovieCardComponent} from "./movie-card.component";
import {LazyLoadImageModule} from "ng2-lazyload-image";

@NgModule({
    imports: [CommonModule,LazyLoadImageModule, HttpModule, RouterModule.forRoot(appRoutes)],
    exports: [MovieCardComponent],
    declarations: [MovieCardComponent],
    providers: [SearchMovieService],
})
export class MovieCardModule {}
