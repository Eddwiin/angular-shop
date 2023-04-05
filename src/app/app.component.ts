import { Component } from '@angular/core';
import { SHARED_MODULE } from '@shared/shared-module';

@Component({
  selector: 'as-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [...SHARED_MODULE],
})

export class AppComponent {
  constructor() {}
}
