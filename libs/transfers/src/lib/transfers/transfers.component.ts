import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';

@Component({
  selector: 'lib-transfers',
  standalone: true,
  imports: [CommonModule, StepperModule, ButtonModule],
  templateUrl: './transfers.component.html',
  styleUrl: './transfers.component.scss',
})
export class TransfersComponent {}
