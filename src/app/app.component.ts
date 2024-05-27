import { Component, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ScreenSizeService } from './screen-size.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, LayoutComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnDestroy {
  destroyed = new Subject<void>();

  // Constantes para los tamaños de pantalla personalizados
  private readonly SCREEN_SIZES: { [key: string]: string } = {
    xs: Breakpoints.XSmall,
    sm: Breakpoints.Small,
    md: Breakpoints.Medium,
    lg: Breakpoints.Large,
    xl: Breakpoints.XLarge,
    '2xl': '2xl',
  };

  constructor(
    breakpointObserver: BreakpointObserver,
    private screenSizeService: ScreenSizeService
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const screenSize of Object.keys(this.SCREEN_SIZES)) {
          if (result.breakpoints[this.SCREEN_SIZES[screenSize]]) {
            console.log(screenSize);
            this.screenSizeService.setCurrentScreenSize(screenSize);
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
