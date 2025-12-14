import { Component, signal } from '@angular/core';

type Service = {
  title: string;
  sub_title: string;
  children: {
    icon: string;
    title: string;
    description: string;
  }[];
};

@Component({
  selector: 'app-services',
  standalone: true,
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class ServicesSection {
  protected service = signal<Service>({
    title: 'What We Offer',
    sub_title: 'Our Signature Services',
    children: [
      {
        icon: 'self_improvement',
        title: 'Therapeutic Massages',
        description:
          'Release tension and restore balance with our range of expert massage therapies.',
      },
      {
        icon: 'face',
        title: 'Rejuvenating Facials',
        description:
          'Revitalize your skin with our custom facials, using only the finest natural ingredients.',
      },
      {
        icon: 'spa',
        title: 'Holistic Body Wraps',
        description:
          'Detoxify and nourish your body from head to toe with our signature wrap treatments.',
      },
    ],
  });
}
