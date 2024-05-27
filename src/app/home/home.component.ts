import { Component } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScreenSizeService } from '../screen-size.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatSliderModule, MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return `${value}`;
  }
  currentScreenSize: string = 'Unknown';

  constructor(private screenSizeService: ScreenSizeService) {}

  ngOnInit(): void {
    this.screenSizeService.currentScreenSize$.subscribe((size) => {
      this.currentScreenSize = size;
    });
  }
}
