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
    })

    describe('First name control', () => {
      beforeEach(() => {
        component.firstNameCtrl.setValue('');
      })
      it('should create firstNameCtrl', () => {
        expect(component.firstNameCtrl).toBeTruthy();
      })

      it('should invalid firstNameCtrl when is empty', () => {
        expect(component.firstNameCtrl.invalid).toBeTrue();
      })

      it('should invalid firstNameCtrl when is less than 2 letters', () => {
        component.firstNameCtrl.setValue('a');
        expect(component.firstNameCtrl.invalid).toBeTrue();
      })

      it('should invalid when firstNameCtrl is superior than 15 letters', () => {
        component.firstNameCtrl.setValue("test-test-test-teest-test-test-test");
        console.log(component.firstNameCtrl.getError(''))
        expect(component.firstNameCtrl.invalid).toBeTrue();
      })
    })
  })
});
