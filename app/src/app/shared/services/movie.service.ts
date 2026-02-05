import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment';
import { HttpClient } from '@angular/common/http';
import { MovieSearchResponse } from '../models/movie/movie-search-response';
import { lastValueFrom, map } from 'rxjs';
import { MovieSearchResult } from '../models/movie/movie-search-result';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private http = inject(HttpClient);
  private tmdbApiKey = environment.tmdbApiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  getMoviesByQuery(query: string): Promise<MovieSearchResult[]> {
    const encodedQuery = encodeURIComponent(query);

    return lastValueFrom(this.http.get<MovieSearchResponse>(`${this.baseUrl}/search/movie?query=${encodedQuery}`, {
      headers: {
        'Authorization': this.tmdbApiKey
      }
    }).pipe(
      map(data => data.results)
    ))
  }
}
