import { Routes } from '@angular/router';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { GuestGuard } from './shared/guards/guest.guard';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/auth/auth.component').then(m => m.AuthComponent),
    canActivate: [GuestGuard]
  },
  {
    path: '',
    loadComponent: () => import('./core/components/sidenav/sidenav.component').then(m => m.SidenavComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'movie',
        loadChildren: () => import('./features/movie/movie.routes').then(m => m.movieRoutes)
      }
    ]
  }
];
