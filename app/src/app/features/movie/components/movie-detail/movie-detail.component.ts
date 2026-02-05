import { Component, inject, input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from '../../../../shared/models/movie/movie-detail';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss',
})
export class MovieDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  movie = input.required<MovieDetail>();

  close() {
    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: false})
  }
}
