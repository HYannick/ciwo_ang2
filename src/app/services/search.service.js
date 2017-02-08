"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/add/operator/map');
var SearchMovieService = (function () {
    function SearchMovieService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.apiKey = '0ce0a0877d9c1a37513852071df84c3f';
    }
    SearchMovieService.prototype.searchMovie = function (querySearch) {
        return this.http.get(this.baseUrl + "/search/movie?api_key=" + this.apiKey + "&query=" + querySearch).map(function (res) { return res.json(); });
    };
    SearchMovieService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SearchMovieService);
    return SearchMovieService;
}());
exports.SearchMovieService = SearchMovieService;
//# sourceMappingURL=search.service.js.map