import { Component, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, MatIcon, A11yModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = output();
}
