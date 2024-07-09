import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent, NavbarComponent } from '@pttl/ui-components';

@Component({
  standalone: true,
  imports: [RouterModule, NavbarComponent, FooterComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
