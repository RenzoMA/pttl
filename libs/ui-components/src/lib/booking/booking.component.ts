import { Component } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import * as moment from 'moment-timezone';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { WhatsappButtonComponent } from '../whatsapp-button/whatsapp-button.component';

@Component({
  selector: 'lib-booking',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    AutoCompleteModule,
    ButtonModule,
    JsonPipe,
    FloatLabelModule,
    InputTextModule,
    InputTextareaModule,
    WhatsappButtonComponent,
  ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  bookingForm = this.fb.nonNullable.group({
    direction: ['from', Validators.required],
    dateTime: ['', Validators.required],
    district: ['', Validators.required],
    flightNumber: [''],
    fullAddress: ['', Validators.required],
  });
  districts = [
    { code: '1', name: 'Miraflores' },
    { code: '2', name: 'San Isidro' },
    { code: '3', name: 'Rimac' },
    { code: '4', name: 'Jesús María' },
    { code: '5', name: 'Breña' },
    { code: '6', name: 'San Miguel' },
    { code: '7', name: 'Surco' },
    { code: '8', name: 'Molina' },
    { code: '9', name: 'Barranco' },
    { code: '10', name: 'Callao' },
    { code: '11', name: 'Pueblo Libre' },
    { code: '12', name: 'Magdalena' },
    { code: '13', name: 'Olivos' },
    { code: '14', name: 'San Martín' },
  ];
  filteredDistricts: any[] = [];
  bookMessage: string = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.bookingForm.controls.direction.valueChanges.subscribe((value) => {
      if (value === 'from') {
        this.bookingForm.controls.flightNumber.setValidators([
          Validators.required,
        ]);
      } else {
        this.bookingForm.controls.flightNumber.clearValidators();
      }
      this.bookingForm.controls.flightNumber.updateValueAndValidity();
    });

    this.bookingForm.statusChanges.subscribe((value) => {
      if (value === 'VALID') {
        const bookingDetails = this.bookingForm.value;
        const direction =
          bookingDetails.direction === 'from' ? 'From Airport' : 'To Airport';
        const dateTime = moment.tz(bookingDetails.dateTime, 'America/Lima');
        const date = dateTime.format('DD/MM/YYYY');
        const time = dateTime.format('HH:mm');
        const district = bookingDetails.district;
        const flightNumber = bookingDetails.flightNumber
          ? `✈️ *Flight Number:* ${bookingDetails.flightNumber}\n`
          : '';
        const fullAddress = bookingDetails.fullAddress;

        this.bookMessage =
          `🚗 *Booking Details* 🚗\n` +
          `----------------------------\n` +
          `📍 *Direction:* ${direction}\n` +
          flightNumber +
          `📅 *Date:* ${date}\n` +
          `🕒 *Time:* ${time}\n` +
          `----------------------------\n` +
          `🏘️ *District:* ${district}\n` +
          `🏠 *Full Address:* ${fullAddress}`;
      }
    });
  }

  filterDistricts(event: any) {
    this.filteredDistricts = this.districts.filter((district) =>
      district.name.toLowerCase().includes(event.query.toLowerCase())
    );
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const formValue = this.bookingForm.value;
      formValue.dateTime = moment
        .tz(formValue.dateTime, 'America/Lima')
        .format();
      console.log(formValue);
      // Handle form submission
    } else {
      // Handle form errors
    }
  }
}
