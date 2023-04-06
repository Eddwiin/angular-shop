import { AfterViewInit, Component } from '@angular/core';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { SHARED_MODULE } from '@shared/shared-module';

@Component({
  selector: 'as-auth',
  standalone: true,
  imports: [...SHARED_MODULE],
  providers: [ModalComponent],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
})
export class AuthComponent implements AfterViewInit {
  constructor(private readonly modal: ModalComponent) {}

  ngAfterViewInit() {
    this.modal.openModal();
  }
}
