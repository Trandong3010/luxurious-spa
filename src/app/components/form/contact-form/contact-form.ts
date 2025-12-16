import { Component, inject } from '@angular/core';
import { InputField } from '../../input-field/input-field';
import { InputArea } from '../../input-area/input-area';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { errorTailorImports } from '@ngneat/error-tailor';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.html',
  imports: [InputField, InputArea, ReactiveFormsModule, errorTailorImports],
})
export class ContactForm {
  private readonly _fb = inject(FormBuilder);

  form = this._fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
    subject: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.form.value);
  }
}
