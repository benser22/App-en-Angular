import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenSizeService {
  private currentScreenSizeSubject = new BehaviorSubject<string>('Unknown');
  currentScreenSize$ = this.currentScreenSizeSubject.asObservable();

  setCurrentScreenSize(size: string): void {
    this.currentScreenSizeSubject.next(size);
  }
}
