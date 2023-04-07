import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { GenderInputComponent } from '@shared/components/gender-input/gender-input.component';

@Component({
  selector: 'as-sign-up',
  standalone: true,
  imports: [CommonModule, GenderInputComponent, ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  genderCtrl = new FormControl('');
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

  signUpForm = new FormGroup({
    genderCtrl: this.genderCtrl,
  });
}
