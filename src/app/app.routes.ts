import {PageComponent} from './pages/page/page.component';

export const ROUTES = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: ':page',
    component: PageComponent
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
