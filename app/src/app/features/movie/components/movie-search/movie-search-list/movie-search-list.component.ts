import { Component, input, ResourceRef } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { MovieSearchResult } from '../../../../../shared/models/movie/movie-search-result';

@Component({
  selector: 'app-movie-search-list',
  imports: [MatListModule, MatIcon],
  templateUrl: './movie-search-list.component.html',
  styleUrl: './movie-search-list.component.scss',
})
export class MovieSearchListComponent {
  moviesResource = input.required<ResourceRef<MovieSearchResult[] | undefined>>();
  query = input.required<string>();
}
