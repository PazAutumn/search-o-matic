import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//Service
import { MoviesService } from '../../api/services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public movies: any;

  constructor(private router: Router,
    private MoviesService: MoviesService,) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies = () => {
    this.MoviesService.getMovies()
    .then((res) => {
      this.movies = res;
      this.movies = this.movies.data.movies
      console.log(this.movies)
    }).catch((err) => {

    })
  }

}
