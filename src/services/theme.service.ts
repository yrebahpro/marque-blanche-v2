import { inject, Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('theme-0');
  public currentTheme$ = this.currentThemeSubject.asObservable();
  public currentUrl: string = '';
  public router = inject(Router);

  constructor() {}

  get theme(): string {
    return this.currentThemeSubject.value;
  }

  set theme(value: string) {
    this.currentThemeSubject.next(value);
  }

  init(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe({
      next: (event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects;
        this.applyTheme();
      },
      error: (e) => {
        console.error('Error ThemeService init : ', e);
        throw(e);
      }
    });
  }

  applyTheme(): void {
    const url = this.currentUrl;
    if (url.includes('client-0')) {
      this.theme = 'theme-0';
    }
    if (url.includes('client-1')) {
      this.theme = 'theme-1';
    }
    if (url.includes('client-2')) {
      this.theme = 'theme-2';
    }
    if (url.includes('client-3')) {
      this.theme = 'theme-3';
    }
  }
}
