import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-input-area',
  imports: [],
  templateUrl: './input-area.html',
})
export class InputArea {
  label = input<string>('Input Label'); // input for the input label
  error = input<string>(''); // input for error message
  value = input<string>(''); // input to store the input value
  placeholder = input<string>('Enter text here...'); // input for placeholder text
  disabled = input<boolean>(false); // input to control input disabled state
  required = input<boolean>(false); // input to control input required state
  onChange = output<string>();

  // Method to handle input changes
  protected onInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (this.onChange) {
      this.onChange.emit(inputElement.value);
    }
  }
}
