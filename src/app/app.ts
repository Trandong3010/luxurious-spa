import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterStore } from './store/counter.store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Inject the Signal Store
  protected readonly counterStore = inject(CounterStore);
}
