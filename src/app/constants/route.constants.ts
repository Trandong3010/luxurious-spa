import { Menu } from '../models/menu.model';

/**
 * Application route constants
 * Centralized route definitions for better maintainability
 */
export const APP_ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  CONTACT: 'contact',
  SERVICES: 'services',
  GALLERY: 'gallery',
  PRICING: 'Pricing',
  PRIVACY: 'privacy',
  TERMS: 'terms',
};

/**
 * Menu items for the application
 * Each item includes a title, URL, and icon
 */

export const MenuItems: Menu[] = [
  { title: 'Home', url: APP_ROUTES.HOME, icon: 'home' },
  { title: 'About', url: APP_ROUTES.ABOUT, icon: 'info' },
  { title: 'Services', url: APP_ROUTES.SERVICES, icon: 'build' },
  { title: 'Gallery', url: APP_ROUTES.GALLERY, icon: 'article' },
  { title: 'Contact', url: APP_ROUTES.CONTACT, icon: 'contact_mail' },
  { title: 'Pricing', url: APP_ROUTES.PRICING, icon: 'help' },
];
