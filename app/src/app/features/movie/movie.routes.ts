import { Routes } from "@angular/router";
import { DrawerLayoutComponent } from "../../core/components/drawer-layout/drawer-layout.component";
import { MovieDetailResolver } from "../../shared/resolvers/movie-detail.resolver";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";
import { MovieSearchComponent } from "./movie-search/movie-search.component";

export const movieRoutes: Routes = [
  {
    path: '',
    component: DrawerLayoutComponent,
    children: [
      {
        path: '',
        component: MovieSearchComponent,
        outlet: 'content'
      },
      {
        path: ':movieId',
        component: MovieDetailComponent,
        resolve: {
          movie: MovieDetailResolver
        }
      }
    ]
  }
]