import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  private authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    this.authService.user$.pipe(
      takeUntilDestroyed()
    ).subscribe((user) => {
      if (!user) {
        this.router.navigate(['']);
      }
    })
  }
}
