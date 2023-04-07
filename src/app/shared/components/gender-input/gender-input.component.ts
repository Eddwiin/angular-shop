import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, Provider } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const GENDER_CONTROL_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => GenderInputComponent),
  multi: true,
};

@Component({
  selector: 'as-gender-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gender-input.component.html',
  styleUrls: ['./gender-input.component.sass'],
  providers: [GENDER_CONTROL_VALUE_ACCESSOR],
})
export class GenderInputComponent implements ControlValueAccessor {
  @Input() maleLabel = 'Homme';
  @Input() femaleLabel = 'Femme';

  value: any;
  onChanged!: any;
  onTouched!: any;

  onGenderSelected(event: any) {
    this.onChanged(event.target.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
