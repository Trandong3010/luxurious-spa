import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  templateUrl: './hero-banner.html',
})
export class Hero {
  title = input<string>();
  subtitle = input<string>();
  buttonText = input<string>();
  buttonLink = input<string>();
  background = input<string>();
  onClick = output<void>();

  handleOnClick() {
    if (this.onClick) {
      this.onClick.emit();
    }
  }
}
