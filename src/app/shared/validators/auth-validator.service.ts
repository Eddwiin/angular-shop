import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AuthValidatorService {
  constructor() {}

  static emailValidator() {
    return (emailCtrl: FormControl<string>) => {
      const isEmailValid =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          emailCtrl.value
        );
      return isEmailValid ? null : { emailInvalid: true };
    };
  }
}
