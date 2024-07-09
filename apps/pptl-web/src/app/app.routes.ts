import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'transfers',
    pathMatch: 'full'
  },
  {
    path: 'transfers',
    loadComponent: () =>
      import('@pttl/transfers').then((mod) => mod.TransfersComponent),
  },
  {
    path: 'contact-us',
    loadComponent: () =>
      import('@pttl/contact-us').then((mod) => mod.ContactUsComponent),
  },
];
