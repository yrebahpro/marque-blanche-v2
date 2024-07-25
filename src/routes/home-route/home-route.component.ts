import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-home-route',
  standalone: true,
  imports: [
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    LogoComponent,
  ],
  templateUrl: './home-route.component.html',
  styleUrl: './home-route.component.scss'
})

export class HomeRouteComponent {
  constructor() {}
}
