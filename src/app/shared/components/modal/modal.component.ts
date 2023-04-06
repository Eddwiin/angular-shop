import { CommonModule } from '@angular/common';
import {
  ApplicationRef,
  Component,
  NgModuleRef,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'as-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass'],
})
export class ModalComponent {
  constructor(
    private readonly viewContainerRef: ViewContainerRef,
    private readonly moduleRef: NgModuleRef<any>,
    private readonly appRef: ApplicationRef
  ) {}

  openModal() {
    // const componentRef = this.viewContainerRef.createComponent(ModalComponent, {
    //   injector: this.moduleRef.injector,
    // });
    // this.appRef.attachView(componentRef.hostView);
    // const factory =
    //   this.moduleRef.componentFactoryResolver.resolveComponentFactory(
    //     ForgotPasswordComponent
    //   );
    // const newNode = document.createElement('div');
    // newNode.id = 'placeholder';
    // document.body.prepend(newNode);
    // const ref = factory.create(this.moduleRef.injector, [], newNode);
    // this.appRef.attachView(ref.hostView);
  }
}
