import { Component, signal } from '@angular/core';

type About = {
  title: string;
  sub_title: string;
  description: string;
  background: string;
};

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class AboutSection {
  protected about = signal<About>({
    title: 'Our Philosophy',
    sub_title: 'Discover a Haven of Serenity',
    description:
      'At Aura Spa, we believe in nurturing the body, calming the mind, and uplifting the spirit. Our mission is to provide a unique, rejuvenating experience through personalized treatments and serene surroundings, creating a sanctuary where you can escape the everyday and reconnect with your inner self.',
    background:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaGomdKUIFc2FPNcrwmabg2v_1RJHgIlBRo-smMSvUBqK-s_gq1hPHSJKJXavwJyVD9abtH6kAVc9NAIFxlNWTwPjSyN8xbI5N12pEBuKd9HOGblU5DKaUlaV1BJQWkpenfqnv38ilJsW5nAle8WQuj9offWTM6LTsCqbBnENSNEiaC5PKTOJrbxxu_iARp1m3ylQevVZZffstYjjgmvDmoA1N7otdKye90Ux9wnN3hOdeaWYQh7IOzlAs-inyq718sDMXzgCHb4g',
  });
}
