import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth';

import { HomePageComponent } from './components/containers/home';
import { NotFoundPageComponent } from './components/containers/not-found';
import { LoginPageComponent } from './components/containers/login';
import { RegisterPageComponent } from './components/containers/register';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent
  }
];