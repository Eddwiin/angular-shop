import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'as-sign-up',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent {
  firstNameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
  ]);

  lastNameCtrl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(15),
  ]);

  signUpForm = new FormGroup({});
}
