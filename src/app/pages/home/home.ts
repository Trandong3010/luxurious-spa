import { Component } from '@angular/core';
import { Hero } from "../../components/section/hero-banner/hero-banner";
import { AboutSection } from "../../components/section/about/about";
import { ServicesSection } from "../../components/section/services/services";

@Component({
  selector: 'app-home',
  imports: [Hero, AboutSection, ServicesSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
