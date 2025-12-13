import { Component, signal } from '@angular/core';
import { MenuItems } from '../../../constants/route.constants';
import { Menu } from '../../../models/menu.interface';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  protected menuItems = signal<Menu[]>(MenuItems);
}
