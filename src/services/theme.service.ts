import { inject, Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ThemeService {
  public currentTheme: string = 'theme-0';
  public currentUrl: string = '';
  public router = inject(Router);

  constructor() {}

  get theme(): string {
    return this.currentTheme;
  }

  set theme(value: string) {
    this.currentTheme = value;
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