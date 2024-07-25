import { Component, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeRouteComponent } from '../routes/home-route/home-route.component';
import { ThemeService } from '../services/theme.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeRouteComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
  themeService = inject(ThemeService);
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.initTheming();
  }

  // init theme service and set data-attr to html tag (to define theme to apply by client url)
  initTheming(): void {
    this.themeService.init();
    let timeout = setTimeout(()=>{
      if (isPlatformBrowser(this.platformId)) {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('data-theme', this.themeService.theme);
      }
    clearTimeout(timeout);
    }, 300);
  }
}
