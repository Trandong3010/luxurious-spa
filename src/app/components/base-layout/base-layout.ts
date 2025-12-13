import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.html',
  imports: [CommonModule, RouterOutlet, Header, Footer],
})
export class BaseLayoutComponent {}
