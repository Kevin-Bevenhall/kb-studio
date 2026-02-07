import { Component, effect, input, output, ResourceRef } from '@angular/core';
import { MovieSearchResponse } from '../../../../../shared/models/movie/movie-search-response';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator'

@Component({
  selector: 'app-movie-search-grid',
  imports: [MatPaginatorModule],
  templateUrl: './movie-search-grid.component.html',
  styleUrl: './movie-search-grid.component.scss',
})
export class MovieSearchGridComponent {
  movies = input.required<ResourceRef<MovieSearchResponse | undefined>>();
  querySnapshot = input.required<string>();

  updatePage = output<number>();

  handlePagination(e: PageEvent) {
    this.updatePage.emit(e.pageIndex + 1);
  }
}
