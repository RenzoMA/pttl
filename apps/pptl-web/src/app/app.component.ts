import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  BookingComponent,
  FooterComponent,
  NavbarComponent,
  TransfersComponent,
  TrustedPartnersComponent,
} from '@pttl/ui-components';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    NavbarComponent,
    FooterComponent,
    TrustedPartnersComponent,
    TransfersComponent,
    BookingComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
