import { Component, resource, signal } from '@angular/core';
import { MovieSearchInputComponent } from "./components/movie-search-input/movie-search-input.component";

@Component({
  selector: 'app-movie-search-page',
  imports: [MovieSearchInputComponent],
  templateUrl: './movie-search-page.component.html',
  styleUrl: './movie-search-page.component.scss',
})
export class MovieSearchPageComponent {
  query = signal('');
}
