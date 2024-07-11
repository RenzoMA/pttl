import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { WhatsappButtonComponent } from 'libs/ui-components/src';

@Component({
  selector: 'lib-transfers',
  standalone: true,
  imports: [CommonModule, ButtonModule, JsonPipe, WhatsappButtonComponent],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss',
})
export class TransfersComponent {}
