import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss'
})
export class LogoComponent implements OnInit, OnDestroy {
  themeSubscription!: Subscription;
  themeService = inject(ThemeService);
  currentTheme!: string;
  @Input() href: string = "/";

  ngOnInit(): void {
    this.subscribeTheme();
  }

  ngOnDestroy(): void {
    this.unsubscribeTheme();
  }

  subscribeTheme(): void {
    this.themeSubscription = this.themeService.currentTheme$.subscribe({
      next:(currentTheme) => {
        this.currentTheme = currentTheme;
      },
      error: (e) => {
        console.error('error subscribeTheme : ', e);
        throw(e);
      }
    })
  }

  unsubscribeTheme(): void {
    if(this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
