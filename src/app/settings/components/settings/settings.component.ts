import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { filter } from 'rxjs/operators';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { Subscription, Observable } from 'rxjs';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';
import { isSubmittingSelector, validationErrorsSelector } from '../../store/selectors';
import { updateCurrentUserAction } from 'src/app/auth/store/actions/updateCurrentUser.action';
import { CurrentUserInputInterface } from 'src/app/shared/types/currentUserInput.interface';
import { logoutAction } from './../../../auth/store/actions/sync.action';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html'
})

export class SettingsComponent implements OnInit, OnDestroy {
  form: FormGroup;
  currentUser: CurrentUserInterface;
  currentUserSubscription: Subscription;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeListener();
    this.initializeValues();
  }
  ngOnDestroy(): void {
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }

  initializeListener(): void {
    this.currentUserSubscription = this.store.pipe(select(currentUserSelector), filter(Boolean))
      .subscribe((currentUser: CurrentUserInterface) => {
        this.currentUser = currentUser;
        this.initializeForm();
      });
  }

  initializeForm(): void {
    this.form = this.fb.group({
      image: [this.currentUser.image],
      username: [this.currentUser.username],
      bio: [this.currentUser.bio],
      email: [this.currentUser.email],
      password: ['']
    });
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit() {
    const currentUserInput: CurrentUserInputInterface = {
      ...this.currentUser,
      ...this.form.value
    };
    this.store.dispatch(updateCurrentUserAction({ currentUserInput }));
  }
  logout() {
    this.store.dispatch(logoutAction());
  }
}
