import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { loginAction } from '../../store/actions/login.action';
import { Observable } from 'rxjs';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;


  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeForm() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  initializeValues() {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value
    };

    this.store.dispatch(loginAction({ request }));
  }



}
