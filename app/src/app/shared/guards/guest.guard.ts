import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { first, map } from 'rxjs';

export const GuestGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.user$.pipe(
    first(),
    map(user => {
      if (user) {
        return router.parseUrl('home');
      } else {
        return true;
      }
    })
  )
};
