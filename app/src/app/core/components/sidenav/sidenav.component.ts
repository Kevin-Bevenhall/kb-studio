import { Component, computed, inject, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core'
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatRippleModule, MatDividerModule, RouterOutlet,
    RouterLink, RouterLinkActive, MatTooltipModule, FormsModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  protected authService = inject(AuthService);
  sidenav = viewChild.required(MatSidenav);

  sidenavOpen = signal(true);
  sidenavExtended = signal(true);
  sidenavPinned = signal(false);
  searchTerm = signal('');

  sidenavMode = computed(() => this.sidenavPinned() ? 'side' : 'over')
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
  })

  toggleSidenav() {
    if (!this.sidenavPinned()) {
      this.sidenavExtended.set(!this.sidenavExtended());
    }
  }

  check() {
    console.log(this.authService.user())
  }

  onBackdropClick() {
    if (!this.sidenavPinned()) {
      this.sidenavExtended.set(false)
    }
  }
}
