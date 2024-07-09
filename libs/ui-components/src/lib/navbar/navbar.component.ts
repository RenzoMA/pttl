import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('0.5s ease-in-out', style({ opacity: 1, height: '*' })),
      ]),
      transition(':leave', [
        style({ opacity: 1, height: '*' }),
        animate('0.5s ease-in-out', style({ opacity: 0, height: 0 })),
      ]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  ngOnInit(): void {}
  displayMobileMenu = false;
}
