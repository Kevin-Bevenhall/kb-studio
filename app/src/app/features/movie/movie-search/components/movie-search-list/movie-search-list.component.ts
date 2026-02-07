import { Component, input, output, ResourceRef } from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatIcon } from "@angular/material/icon";
import { MovieSearchResult } from '../../../../../shared/models/movie/movie-search-result';
import { MatProgressBar } from "@angular/material/progress-bar";

@Component({
  selector: 'app-movie-search-list',
  imports: [MatListModule, MatIcon, MatProgressBar],
  templateUrl: './movie-search-list.component.html',
  styleUrl: './movie-search-list.component.scss',
})
export class MovieSearchListComponent {
  navigate = output<number>();

  movies = input.required<ResourceRef<MovieSearchResult[] | undefined>>();
  query = input.required<string>();
}
