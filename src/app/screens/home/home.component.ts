import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
//Service
import { MoviesService } from '../../../api/services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('modal') modal: any
  public movies: any
  public moviesFound: any
  public movie: any
  public movieFound: any
  public isActive: boolean = true
  public page: number = 1
  public isLoading: boolean = true
  public searchInput: any;
  public movieList: boolean = true;
  public error: boolean = false;
  public noResults: any;

  constructor(
    private MoviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies(15, 1);
  }

  getMovies = (limit: number, page: number) => {
    this.isLoading = true;
    this.page = page;
    this.MoviesService.getMovies(limit, page)
    .then((res) => {
      this.isLoading = false;
      this.movies = res;
      this.movies = this.movies.data.movies;
    }).catch((err) => {
      this.isLoading = false;
      this.error = true;
    })
  }
  getMovieDetails = (id: number) => {
    this.modal.isLoading = true;
    this.MoviesService.getMovieDetails(id)
    .then((res) => {
      this.modal.isLoading = false;
      this.movie = res;
      this.movie = this.movie.data.movie;
      this.modal.data = this.movie;
    }).catch((err) => {
      this.isLoading = false;
      this.error = true;
    })
  }
  searchMovies = (keyword:string) => {
    this.movieList = false;
    this.isLoading = true;
    this.MoviesService.searchMovies(keyword)
    .then((res) => {
      this.isLoading = false;
      this.moviesFound = res;
      this.noResults = this.moviesFound.data.movie_count === 0;
      this.moviesFound = this.moviesFound.data.movies;
    }).catch((err) => {
      this.isLoading = false;
      this.error = true;
    })
  }
  toggleModal = (id: number) => {
    this.modal.toggleModal();
    this.getMovieDetails(id);
  }
}
