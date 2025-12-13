import { Component } from '@angular/core';
import { Hero } from "../../components/section/hero-banner/hero-banner";

@Component({
  selector: 'app-home',
  imports: [Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
