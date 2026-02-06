import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class App {
  private authService = inject(AuthService);
  private router = inject(Router);

  loading = signal(false);

  constructor() {
    this.authService.user$.pipe(
      takeUntilDestroyed()
    ).subscribe((user) => {
      if (!user) {
        this.router.navigate(['']);
      }
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loading.set(true);
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError 
      ) {
        this.loading.set(false);
      }
    })
  }
}
