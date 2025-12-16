import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { errorTailorImports } from '@ngneat/error-tailor';

@Component({
  selector: 'app-book-now-form',
  standalone: true,
  templateUrl: './book-now-form.html',
  imports: [errorTailorImports, ReactiveFormsModule],
})
export class BookNowForm {
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
