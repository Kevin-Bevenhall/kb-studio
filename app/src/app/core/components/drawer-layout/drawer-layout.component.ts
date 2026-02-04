import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-drawer-layout',
  imports: [MatSidenavModule, RouterOutlet],
  templateUrl: './drawer-layout.component.html',
  styleUrl: './drawer-layout.component.scss',
})
export class DrawerLayoutComponent {

}
