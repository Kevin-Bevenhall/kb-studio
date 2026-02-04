import { Routes } from "@angular/router";
import { MovieSearchPageComponent } from "./movie-search/movie-search-page.component";
import { MovieDetailPageComponent } from "./movie-detail/movie-detail-page.component";
import { DrawerLayoutComponent } from "../../core/components/drawer-layout/drawer-layout.component";

export const movieRoutes: Routes = [
  {
    path: '',
    component: DrawerLayoutComponent,
    children: [
      {
        path: '',
        component: MovieSearchPageComponent,
        outlet: 'content'
      },
      {
        path: ':movieId',
        component: MovieDetailPageComponent,
      }
    ]
  }
]