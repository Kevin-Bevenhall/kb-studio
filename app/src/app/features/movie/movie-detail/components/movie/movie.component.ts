import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { ActivatedRoute, Router } from '@angular/router';
import { MovieDetail } from '../../../../../shared/models/movie/movie-detail';
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'

@Component({
  selector: 'app-movie',
  imports: [MatButtonModule, MatIcon, MatCardModule, MatChipsModule],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss',
})
export class MovieComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  movie = input.required<MovieDetail>();

  close() {
    this.router.navigate(['../'], { relativeTo: this.route, skipLocationChange: false });
  }
}
