import { Component } from '@angular/core';
import { InlineForm } from "../../form/inline-form/inline-form";

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  imports: [InlineForm],
})
export class Contact {}
