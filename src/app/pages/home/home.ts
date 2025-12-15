import { Component, inject, signal } from '@angular/core';
import { Hero } from '../../components/section/hero-banner/hero-banner';
import { AboutSection } from '../../components/section/about/about';
import { ServicesSection } from '../../components/section/services/services';
import { ImageGallery } from '../../components/section/image-gallery/image-gallery';
import { Testimonials } from '../../components/section/testimonials/testimonials';
import { Pricing } from '../../components/section/pricing/pricing';
import { Contact } from '../../components/section/contact/contact';
import { HeroBanner } from '../../models';
import { ModalStore } from '../../components';
import { ContactForm } from '../../components/form/contact-form/contact-form';

@Component({
  selector: 'app-home',
  imports: [Hero, AboutSection, ServicesSection, ImageGallery, Testimonials, Pricing, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private _modalStore = inject(ModalStore);
  protected heroBanner = signal<HeroBanner>({
    title: 'Experience Pure Tranquility',
    subtitle: 'Your sanctuary for mind, body, and soul.',
    buttonText: 'Book Your Escape',
    buttonLink: '/services',
    background:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBt7_J3MRMmDsHwhrIvgm6HOijdb3t3P7g6z1skDZO601z3gTgcblubYqFBcknwnFkHWOIW5_a5kR77XPDNt53kfrDXWo43ICB6RL_oez4B-J2RZZIgrntmF8yq9QCBHhT6b8nbpli1TIWWPGUqM3prXTIfprx54aEOD1oIwLcqUOjUhnAW-jQHhN9at6ZPYgLWjYuOkQO4SZTQgYzoGezqQ8RSb9JXEHLi3AEILKzVEcmkbAuJXsaPm7FF2LhVU61PvaYFZ_sFaWY',
  });
  handleHeroClick() {
    this._modalStore.open(
      ContactForm,
      'Send Us a Message',
      `We'd love to hear from you. Please fill out the form below.`,
      [
        {
          text: 'Send Message',
          icon: 'send',
          callback: () => {
            this._modalStore.close();
          },
        },
      ]
    );
  }
}
