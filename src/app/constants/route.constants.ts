import { Menu } from '../models/menu.interface';

/**
 * Application route constants
 * Centralized route definitions for better maintainability
 */
export const APP_ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  CONTACT: 'contact',
  SERVICES: 'services',
  BLOG: 'blog',
  FAQ: 'faq',
  PRIVACY: 'privacy',
  TERMS: 'terms',
};

/**
 * Menu items for the application
 * Each item includes a title, URL, and icon
 */

export const MenuItems: Menu[] = [
  { title: 'Home', url: APP_ROUTES.HOME, icon: 'home' },
  { title: 'About Us', url: APP_ROUTES.ABOUT, icon: 'info' },
  { title: 'Services', url: APP_ROUTES.SERVICES, icon: 'build' },
  { title: 'Blog', url: APP_ROUTES.BLOG, icon: 'article' },
  { title: 'Contact', url: APP_ROUTES.CONTACT, icon: 'contact_mail' },
  { title: 'FAQ', url: APP_ROUTES.FAQ, icon: 'help' },
  { title: 'Privacy Policy', url: APP_ROUTES.PRIVACY, icon: 'privacy_tip' },
  { title: 'Terms of Service', url: APP_ROUTES.TERMS, icon: 'description' },
  { title: 'FAQ', url: APP_ROUTES.FAQ, icon: 'help' },
];
