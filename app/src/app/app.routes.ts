import { Routes } from '@angular/router';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/sidenav/sidenav.component').then(m => m.SidenavComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
      }
    ]
  }
];
