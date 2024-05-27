import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatMenuModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  scrolled = false;
  constructor() {
    this.onWindowScroll();
  }
  @HostListener('window:scroll')
  onWindowScroll() {
    this.scrolled = window.scrollY > 0;
  }
}
