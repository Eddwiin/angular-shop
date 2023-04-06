import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

export const SHARED_MODULE = [
  CommonModule,
  RouterModule,
  HttpClientModule,
] as const;
