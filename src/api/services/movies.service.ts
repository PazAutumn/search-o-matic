import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    protected BASE_PATH = 'https://yts.mx/api/v2';

  constructor(private http: HttpClient) { }

  getMovies = (limit: number, page: number) => {
    const limitQuery = 'limit=' + limit;
    const pageQuery = 'page=' + page;
    return this.http.get(`${this.BASE_PATH}/list_movies.json?${limitQuery}&${pageQuery}`).toPromise()
  }

  getMovieDetails = (id: number) => {
    return this.http.get(`${this.BASE_PATH}/movie_details.json?movie_id=${id}`).toPromise()
  }

  searchMovies = (key: string) => {
    return this.http.get(`${this.BASE_PATH}/list_movies.json?query_term=${key}`).toPromise()
  }
}