import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';

@Component({
  selector: 'as-modal',
  standalone: true,
  imports: [CommonModule],
templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {
  contentRef!: TemplateRef<any>;
  
  constructor(){ }

  openModal() {
    // const factory = this.moduleRef.componentFactoryResolver.resolveComponentFactory(ForgotPasswordComponent);

    // let newNode = document.createElement('div');
    // newNode.id = 'placeholder';
    // document.body.prepend(newNode);

    // const ref = factory.create(this.moduleRef.injector, [], newNode);
    // this.appRef.attachView(ref.hostView);
  }
}
