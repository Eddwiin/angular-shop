import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'as-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent {}
