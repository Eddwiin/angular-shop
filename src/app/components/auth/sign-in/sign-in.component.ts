import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { AuthService } from '@core/services/auth/auth.service';
import { AuthValidatorService } from '@shared/validators/auth-validator.service';

enum SignInKeyCtrl {
  EMAIL = 'emailCtrl',
  PASSWORD = 'passwordCtrl',
}

type SignInForm = {
  [SignInKeyCtrl.EMAIL]: FormControl<string | null>;
  [SignInKeyCtrl.PASSWORD]: FormControl<string | null>;
};

@Component({
  selector: 'as-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [AuthService],
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent {
  emailCtrl = new FormControl<string>('', [
    Validators.required,
    AuthValidatorService.emailValidator(),
  ]);

  passwordCtrl = new FormControl<string>('', [Validators.required]);
  signInForm = new FormGroup<SignInForm>({
    [SignInKeyCtrl.EMAIL]: this.emailCtrl,
    [SignInKeyCtrl.PASSWORD]: this.passwordCtrl,
  });

  constructor(private readonly authService: AuthService) {}

  onSubmit() {
    if (this.signInForm.invalid) return;
    const email = this.emailCtrl.value as string;
    const password = this.passwordCtrl.value as string;

    this.authService.signIn({ email, password });
  }
}
