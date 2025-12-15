import { Component } from '@angular/core';
import { InputField } from "../../input-field/input-field";
import { InputArea } from "../../input-area/input-area";

@Component({
  selector: 'app-contact-form',
  standalone: true,
  templateUrl: './contact-form.html',
  imports: [InputField, InputArea],
})
export class ContactForm {}
