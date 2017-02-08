import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {SearchModule} from "./components/search/search.module";
import {MovieModule} from "./components/movie/movie.module";
import {LazyLoadImageModule} from "ng2-lazyload-image";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {MovieCardModule} from "./components/movie-card/movie-card.module";
import {GenreModule} from "./components/genre/genre.module";




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SearchModule,
    MovieModule,
    MovieCardModule,
    GenreModule,
    LazyLoadImageModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
