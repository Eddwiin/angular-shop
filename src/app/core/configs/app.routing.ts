import { inject } from '@angular/core';
import { Route } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { PATHS } from '@shared/enums/paths.enum';

export default [
  {
    path: PATHS.AUTH,
    loadComponent: () =>
      import('./../../components/auth/auth.component').then(
        c => c.AuthComponent
      ),
    canActivate: [() => inject(AuthService).isLogged()],
    children: [
      {
        path: PATHS.SIGN_IN,
        loadComponent: () =>
          import('./../../components/auth/sign-in/sign-in.component').then(
            c => c.SignInComponent
          ),
      },
      {
        path: PATHS.SIGN_UP,
        loadComponent: () =>
          import('./../../components/auth/sign-up/sign-up.component').then(
            c => c.SignUpComponent
          ),
      },
      {
        path: PATHS.FORGOT_PASSWORD,
        loadComponent: () =>
          import(
            './../../components/auth/forgot-password/forgot-password.component'
          ).then(c => c.ForgotPasswordComponent),
      },
    ],
  },
  {
    path: PATHS.HOME,
    loadComponent: () =>
      import('./../../components/home/home.component').then(
        c => c.HomeComponent
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: `/${PATHS.AUTH}/${PATHS.SIGN_IN}`,
  },
] as Route[];
