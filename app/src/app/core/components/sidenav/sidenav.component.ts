import { Component, computed, signal, viewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatIconModule } from '@angular/material/icon'
import { MatRippleModule } from '@angular/material/core'
import { MatDividerModule } from '@angular/material/divider';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  imports: [MatSidenavModule, MatButtonModule, MatListModule, MatIconModule, MatRippleModule, MatDividerModule, RouterOutlet, 
  RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  sidenav = viewChild.required(MatSidenav);
  isCollapsed = signal(false);
  sidenavWidth = computed(() => this.isCollapsed() ? '56px' : '255px');

  menuItems = [
    { label: 'Home', path: 'home', icon: 'home' },
    { label: 'Calendar', path: 'calendar', icon: 'calendar_month' },
    { label: 'Board', path: 'board', icon: 'developer_board' },
    { label: 'Movies', path: 'movie', icon: 'videocam' },
  ];

  toggleSidenav() {
    this.isCollapsed.set(!this.isCollapsed());
  }
}
