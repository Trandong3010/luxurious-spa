import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-field.html',
})
export class InputField {
  label = input<string>('Input Label'); // input for the input label
  placeholder = input<string>('Enter text here...'); // input for placeholder text
  disabled = input<boolean>(false); // input to control input disabled state
  required = input<boolean>(false); // input to control input required state
  type = input<string>('text'); // input to control input type
  icon = input<string>(''); // input for input icon
  control = input<FormControl<string | null>>(); // input for form control
}
