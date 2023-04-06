import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
type Authentification = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  resetPassword: string;
};

type SignIn = Pick<Authentification, 'email' | 'password'>;

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  signIn(signIn: SignIn) {
    return this.http.post('', signIn).pipe(
      catchError(e => {
        console.error(e);
        return throwError(() => e);
      })
    );
  }

  isLogged() {
    return of(true);
  }
}
