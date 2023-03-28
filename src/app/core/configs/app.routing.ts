import { Route } from '@angular/router';
import { PATHS } from 'src/app/shared/enums/paths.enum';

export default [
  {
    path: PATHS.AUTH,
    loadComponent: () =>
      import('./../../components/auth/auth.component').then(
        c => c.AuthComponent
      ),
    children: [
      {
        path: PATHS.SIGN_IN,
        loadComponent: () =>
          import('./../../components/auth/sign-in/sign-in.component').then(
            c => c.SignInComponent
          ),
      },
      {
        path: PATHS.SIGN_IN,
        loadComponent: () =>
          import('./../../components/auth/sign-in/sign-in.component').then(
            c => c.SignInComponent
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
    path: '',
    pathMatch: 'full',
    redirectTo: `/${PATHS.AUTH}/${PATHS.SIGN_IN}`,
  },
] as Route[];
