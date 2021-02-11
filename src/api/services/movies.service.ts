import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
    protected BASE_PATH = 'https://yts.mx/api/v2';

  constructor(private http: HttpClient) { }

  getMovies = () => {
    return this.http.get(`${this.BASE_PATH}/list_movies.json?limit=10`).toPromise()
  }

}