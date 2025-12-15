import { Component } from '@angular/core';
import { InputField } from '../../input-field/input-field';
import { InputArea } from '../../input-area/input-area';

@Component({
  selector: 'app-inline-form',
  standalone: true,
  templateUrl: './inline-form.html',
  imports: [InputField, InputArea],
})
export class InlineForm {

}
