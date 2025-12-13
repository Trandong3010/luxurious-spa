import { Component } from '@angular/core';
import { Hero } from "../../components/section/hero-banner/hero-banner";
import { AboutSection } from "../../components/section/about/about";

@Component({
  selector: 'app-home',
  imports: [Hero, AboutSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
