import { Component, effect, output, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-movie-search-input',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  templateUrl: './movie-search-input.component.html',
  styleUrl: './movie-search-input.component.scss',
})
export class MovieSearchInputComponent {
  query = output<string>();

  searchTerm = signal('');
  searchTerm$ = toObservable(this.searchTerm).pipe(
    debounceTime(400),
    distinctUntilChanged()
  );

  debounced = toSignal(this.searchTerm$, { initialValue: '' });

  constructor() {
    effect(() => {
      this.query.emit(this.debounced());
    });
  }
}
