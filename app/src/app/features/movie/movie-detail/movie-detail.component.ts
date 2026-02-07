import { Component, input } from '@angular/core';
import { MovieDetail } from '../../../shared/models/movie/movie-detail';
import { MovieComponent } from './components/movie/movie.component';

@Component({
  selector: 'app-movie-detail',
  imports: [MovieComponent],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  movie = input.required<MovieDetail>();
}
