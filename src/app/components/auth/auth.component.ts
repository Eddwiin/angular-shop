import { Component } from '@angular/core';
import { SHARED_MODULE } from '@shared/shared-module';

@Component({
  selector: 'as-auth',
  standalone: true,
  imports: [...SHARED_MODULE],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent {}
