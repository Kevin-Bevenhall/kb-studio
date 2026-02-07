import { Component, inject, resource, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../../shared/services/movie.service';
import { MovieSearchGridComponent } from './components/movie-search-grid/movie-search-grid.component';
import { MovieSearchInputComponent } from './components/movie-search-input/movie-search-input.component';
import { MovieSearchListComponent } from './components/movie-search-list/movie-search-list.component';


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
  querySnapshot = signal('');
  page = signal(1);
  moviesRequested = signal<undefined | true>(undefined);

  moviesQueryResource = resource({
    params: () => {
      const query = this.query();
      return query ? { query } : undefined
    },
    loader: ({ params }) => this.movieService.getMoviesByQuery(params.query),
  });

  moviesResultsResource = resource({
    params: () => this.moviesRequested(),
    loader: () => this.movieService.getMoviesByQueryAndPage(this.query(), this.page())
  });

  handleSearch() {
    this.moviesRequested.set(true);
    this.querySnapshot.set(this.query());
    this.page.set(1);
    this.moviesResultsResource.reload();
  }

  handleNavigate(movieId: number) {
    this.router.navigateByUrl(`movie/${movieId}`);
  }

  handlePageUpdate(page: number) {
    this.page.set(page);
    this.moviesResultsResource.reload()
  }
}
