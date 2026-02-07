import { Component, inject, resource, signal } from '@angular/core';
import { MovieService } from '../../../shared/services/movie.service';
import { Router } from '@angular/router';
import { MovieSearchInputComponent } from './components/movie-search-input/movie-search-input.component';
import { MovieSearchListComponent } from './components/movie-search-list/movie-search-list.component';
import { MovieSearchGridComponent } from './components/movie-search-grid/movie-search-grid.component';


@Component({
  selector: 'app-movie-search-page',
  imports: [MovieSearchInputComponent, MovieSearchListComponent, MovieSearchGridComponent],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.scss',
})
export class MovieSearchComponent {
  private movieService = inject(MovieService);
  private router = inject(Router);
  query = signal('');
  page = signal(1);

  moviesQueryResource = resource({
    params: () => ({ query: this.query() }),
    loader: ({ params }) => this.movieService.getMoviesByQuery(params.query)
  });

  moviesResultsResource = resource({
    params: () => ({}),
    loader: () => this.movieService.getMoviesByQueryAndPage(this.query(), this.page())
  });

  test() {
    console.log(this.moviesResultsResource.value());
    this.moviesResultsResource.reload()
  }

  handleNavigate(movieId: number) {
    this.router.navigateByUrl(`movie/${movieId}`);
  }
}
