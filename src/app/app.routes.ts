import {Routes} from "@angular/router";
import {SearchComponent} from "./components/search/search.component";
import {MovieComponent} from "./components/movie/movie.component";
import {GenreComponent} from "./components/genre/genre.component";
export const appRoutes: Routes = [
    {path:'', component: SearchComponent},
    {path: 'movie/:id', component: MovieComponent },
    {path: 'genre/:id/:name', component: GenreComponent},
];