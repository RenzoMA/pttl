import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.scss',
})
export class WhatsappButtonComponent {
  message = input<string>();

  whatsappUrl = computed(
    () =>
      `https://api.whatsapp.com/send?phone=51989843152&text=${encodeURIComponent(
        this.message() || ''
      )}`
  );
}
