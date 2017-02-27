import { Injectable } from '@angular/core';
import {URLSearchParams, Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class SearchMovieService {

    private baseUrl: string = 'https://api.themoviedb.org/3';
    private apiKey : string ;
    constructor(private http: Http) {
        this.apiKey = '0ce0a0877d9c1a37513852071df84c3f';
    }

    searchMovie(querySearch){
        var search = new URLSearchParams();
        search.set('api_key', this.apiKey);
        search.set('query', querySearch);
        return  this.http.get(`${this.baseUrl}/search/movie?`, {search}).map(res => res.json())
    }

    getPopular() {
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/discover/movie`, {search}).map(res => res.json())
    }

    getGenre() {
        var search = new URLSearchParams();
        search.set('language','en-US');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/genre/movie/list`, {search}).map(res => res.json())
    }

    getMovie(id: string){
        var search = new URLSearchParams();
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/${id}`, {search}).map(res => res.json())
    }

    getMovieByGenre(id:string){
        var search = new URLSearchParams();
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/genre/${id}/movies`, {search}).map(res => res.json())
    }

    getLatest(){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/latest`, {search}).map(res => res.json())
    }
    getTopRated(){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/top_rated`, {search}).map(res => res.json())
    }
    getUpcoming(){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/upcoming`, {search}).map(res => res.json())
    }
    getReview(id: string){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/${id}/reviews`, {search}).map(res => res.json())
    }

    getMovieCredits(id: string){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/${id}/credits`, {search}).map(res => res.json())
    }
    getMovieImages(id: string){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/${id}/images`, {search}).map(res => res.json())
    }

    getSimilarMovies(id: string){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/${id}/similar`, {search}).map(res => res.json())
    }
    getMovieTrailer(id: string){
        var search = new URLSearchParams();
        search.set('sort_by','popularity.desc');
        search.set('api_key', this.apiKey);
        return this.http.get(`${this.baseUrl}/movie/${id}/videos`, {search}).map(res => res.json())
    }


}