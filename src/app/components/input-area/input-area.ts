import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-area',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-area.html',
})
export class InputArea {
  label = input<string>('Input Label'); // input for the input label
  placeholder = input<string>('Enter text here...'); // input for placeholder text
  disabled = input<boolean>(false); // input to control input disabled state
  required = input<boolean>(false); // input to control input required state
  control = input<FormControl<string | null>>(); // input for form control
}
