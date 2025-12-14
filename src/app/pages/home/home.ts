import { Component } from '@angular/core';
import { Hero } from '../../components/section/hero-banner/hero-banner';
import { AboutSection } from '../../components/section/about/about';
import { ServicesSection } from '../../components/section/services/services';
import { ImageGallery } from '../../components/section/image-gallery/image-gallery';
import { Testimonials } from "../../components/section/testimonials/testimonials";
import { Pricing } from "../../components/section/pricing/pricing";

@Component({
  selector: 'app-home',
  imports: [Hero, AboutSection, ServicesSection, ImageGallery, Testimonials, Pricing],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
