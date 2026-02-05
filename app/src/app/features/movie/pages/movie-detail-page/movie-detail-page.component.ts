import { Component, input } from '@angular/core';
import { MovieDetailComponent } from "../../components/movie-detail/movie-detail.component";
import { MovieDetail } from '../../../../shared/models/movie/movie-detail';

@Component({
  selector: 'app-movie-detail-page',
  imports: [MovieDetailComponent],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.scss',
})
export class MovieDetailPageComponent {
  movie = input.required<MovieDetail>();
}
