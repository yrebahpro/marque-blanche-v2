import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeRouteComponent } from '../routes/home-route/home-route.component';
import { ThemeService } from '../services/theme.service';

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
  
  constructor() {}

  ngOnInit(): void {
    this.themeService.init();
    setTimeout(()=>{
      console.log(this.themeService.theme)
    }, 0)
  }
}
