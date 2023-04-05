import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Form', () => {
    it('should create form', () => {
      expect(component.signUpForm).toBeTruthy();
    });

    describe('First name control', () => {
      beforeEach(() => {
        component.firstNameCtrl.setValue('');
      });
      it('should create firstNameCtrl', () => {
        expect(component.firstNameCtrl).toBeTruthy();
      });

      it('should invalid firstNameCtrl when is empty', () => {
        expect(component.firstNameCtrl.invalid).toBeTrue();
      });

      it('should invalid firstNameCtrl when is less than 2 letters', () => {
        component.firstNameCtrl.setValue('a');
        expect(component.firstNameCtrl.errors?.['minlength']).toBeTruthy();
        expect(component.firstNameCtrl.invalid).toBeTrue();
      });

      it('should invalid when firstNameCtrl is superior than 15 letters', () => {
        component.firstNameCtrl.setValue('test-test-test-teest-test-test-test');
        expect(component.firstNameCtrl.errors?.['maxlength']).toBeTruthy();
        expect(component.firstNameCtrl.invalid).toBeTrue();
      });

      it('should valid firstNameCtrl is between 2 and 15 letters', () => {
        component.firstNameCtrl.setValue('John');
        expect(component.firstNameCtrl.valid).toBeTrue();
      });
    });

    describe('Last name ctrl', () => {
      beforeEach(() => {
        component.lastNameCtrl.setValue('');
      });
      it('should create lastNameCtrl', () => {
        expect(component.lastNameCtrl).toBeTruthy();
      });

      it('should invalid lastNameCtrl when is empty', () => {
        expect(component.lastNameCtrl.invalid).toBeTrue();
      });

      it('should invalid lastNameCtrl when is less than 2 letters', () => {
        component.lastNameCtrl.setValue('a');
        expect(component.lastNameCtrl.errors?.['minlength']).toBeTruthy();
        expect(component.lastNameCtrl.invalid).toBeTrue();
      });

      it('should invalid when lastNameCtrl is superior than 15 letters', () => {
        component.lastNameCtrl.setValue('test-test-test-teest-test-test-test');
        expect(component.lastNameCtrl.errors?.['maxlength']).toBeTruthy();
        expect(component.lastNameCtrl.invalid).toBeTrue();
      });

      it('should valid lastNameCtrl is between 2 and 15 letters', () => {
        component.lastNameCtrl.setValue('John');
        expect(component.lastNameCtrl.valid).toBeTrue();
      });
    });
  });
});
