import { ResolveFn, Router } from '@angular/router';
import { MovieDetail } from '../models/movie/movie-detail';
import { inject } from '@angular/core';
import { MovieService } from '../services/movie.service';

export const MovieDetailResolver: ResolveFn<MovieDetail> = (route, state) => {
  const movieService = inject(MovieService);
  const movieId = route.paramMap.get('movieId');
  return movieService.getMovieById(Number(movieId));
};
