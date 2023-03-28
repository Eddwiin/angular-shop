import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@core/services/auth/auth.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Sign in form', () => {
    it('should create signInForm', () => {
      expect(component.signInForm).toBeTruthy();
    });

    describe('Email control', () => {
      beforeEach(() => {
        component.emailCtrl.reset();
      });

      it('should create emailCtrl', () => {
        expect(component.emailCtrl).toBeTruthy();
      });

      it('should invalid emailCtrl when is null', () => {
        component.emailCtrl.setValue(null);
        expect(component.emailCtrl.invalid).toBeTrue();
      });

      it('should invalid when email is wrong', () => {
        component.emailCtrl.setValue('testtesteezr');
        expect(component.emailCtrl.invalid).toBeTrue();
        expect(component.emailCtrl.getError('emailInvalid')).toBeTruthy();
      });

      it('should valid when email is correct', () => {
        component.emailCtrl.setValue('test@gmail.com');
        expect(component.emailCtrl.valid).toBeTrue();
        expect(component.emailCtrl.getError('emailInvalid')).toBeFalsy();
      });
    });

    describe('Password control', () => {
      beforeEach(() => {
        component.passwordCtrl.reset();
      });

      it('should create passwordCtrl', () => {
        expect(component.passwordCtrl).toBeTruthy();
      });

      it('should invalid passwordCtrl when is empty', () => {
        expect(component.passwordCtrl.invalid).toBeTrue();
      });
    });

    describe('Submit', () => {
      it("shouldn't call signIn method's in authService", () => {
        const signInMethod = spyOn(authService, 'signIn');
        component.onSubmit();
        expect(signInMethod).not.toHaveBeenCalled();
      });
    });
  });
});
