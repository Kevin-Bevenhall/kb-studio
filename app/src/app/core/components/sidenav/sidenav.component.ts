import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, computed, effect, inject, OnInit, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { LocalStorageService } from '../../../shared/services/local-storage.service';
import { HeaderComponent } from "../header/header.component";
import { map } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatRippleModule, MatDividerModule, RouterOutlet,
    RouterLink, RouterLinkActive, MatTooltipModule, FormsModule, HeaderComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  protected authService = inject(AuthService);
  protected localStorageService = inject(LocalStorageService);
  private breakpointObserver = inject(BreakpointObserver);
  sidenav = viewChild.required(MatSidenav);

  // Mobile state
  isMobile = toSignal(this.breakpointObserver.observe('(max-width: 599px)').pipe(
    map(state => state.matches)
  ));
  sidenavOpen = signal(false);

  // Tablet/Desktop state
  sidenavExtended = signal(false);
  sidenavPinned = signal(false);
  searchTerm = signal('');

  sidenavMode = computed(() => this.sidenavPinned() ? 'side' : 'over');
  sidenavWidth = computed(() => this.sidenavExtended() ? '255px' : '56px');

  menuItems = [
    { label: 'Home', path: 'home', icon: 'home' },
    { label: 'Calendar', path: 'calendar', icon: 'calendar_month' },
    { label: 'Board', path: 'board', icon: 'developer_board' },
    { label: 'Movies', path: 'movie', icon: 'videocam' },
  ];

  filteredMenuItems = computed(() => {
    if (!this.searchTerm()) {
      return this.menuItems;
    } else {
      const searchTerm = this.searchTerm().trim().toLowerCase();
      return this.menuItems.filter(item => item.label.toLowerCase().includes(searchTerm));
    }
  });

  constructor() {
    effect(() => {
      console.log(this.isMobile())
    })
  }

  ngOnInit(): void {
    const sidenavState = this.localStorageService.getItem('sidenavState');
    if (sidenavState == 'pinned') {
      this.sidenavExtended.set(true);
      this.sidenavPinned.set(true);
    }
  }

  toggleSidenav() {
    if (!this.sidenavPinned()) {
      this.sidenavExtended.set(!this.sidenavExtended());
    }
  }

  handleSidenavState() {
    this.sidenavPinned.set(!this.sidenavPinned());
    this.localStorageService.setItem('sidenavState', this.sidenavPinned() ? 'pinned' : 'unpinned');
  }

  onBackdropClick() {
    if (!this.sidenavPinned()) {
      this.sidenavExtended.set(false);
    }
  }
}
