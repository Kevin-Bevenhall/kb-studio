import { Component, inject, resource, signal } from '@angular/core';
import { MovieSearchInputComponent } from "../../components/movie-search/movie-search-input/movie-search-input.component";
import { MovieService } from '../../../../shared/services/movie.service';
import { MovieSearchListComponent } from '../../components/movie-search/movie-search-list/movie-search-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-search-page',
  imports: [MovieSearchInputComponent, MovieSearchListComponent],
  templateUrl: './movie-search-page.component.html',
  styleUrl: './movie-search-page.component.scss',
})
export class MovieSearchPageComponent {
  private movieService = inject(MovieService);
  private router = inject(Router);
  query = signal('');

  moviesResource = resource({
    params: () => ({ query: this.query() }),
    loader: ({ params }) => this.movieService.getMoviesByQuery(params.query)
  });

  handleNavigate(movieId: number) {
    this.router.navigateByUrl(`movie/${movieId}`)
  }
}
