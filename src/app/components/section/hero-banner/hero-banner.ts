import { Component, signal } from '@angular/core';

type HeroBanner = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  background: string;
};

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.scss',
})
export class Hero {
  protected heroBanner = signal<HeroBanner>({
    title: 'Experience Pure Tranquility',
    subtitle: 'Your sanctuary for mind, body, and soul.',
    buttonText: 'Book Your Escape',
    buttonLink: '/services',
    background:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBt7_J3MRMmDsHwhrIvgm6HOijdb3t3P7g6z1skDZO601z3gTgcblubYqFBcknwnFkHWOIW5_a5kR77XPDNt53kfrDXWo43ICB6RL_oez4B-J2RZZIgrntmF8yq9QCBHhT6b8nbpli1TIWWPGUqM3prXTIfprx54aEOD1oIwLcqUOjUhnAW-jQHhN9at6ZPYgLWjYuOkQO4SZTQgYzoGezqQ8RSb9JXEHLi3AEILKzVEcmkbAuJXsaPm7FF2LhVU61PvaYFZ_sFaWY',
  });
}
