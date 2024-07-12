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
  isDisabled = input<boolean>(false);
  whatsappUrl = computed(
    () =>
      `https://api.whatsapp.com/send?phone=51989843152&text=${encodeURIComponent(
        this.message() || ''
      )}`
  );

  handleClick(event: Event) {
    if (this.isDisabled()) {
      event.preventDefault();
    }
  }
}
