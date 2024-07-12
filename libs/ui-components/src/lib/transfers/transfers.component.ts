import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappButtonComponent } from '../whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'lib-transfers',
  standalone: true,
  imports: [
    CommonModule,
    WhatsappButtonComponent,
  ],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss',
})
export class TransfersComponent {}
