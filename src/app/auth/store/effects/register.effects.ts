import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { registerAction, registerSuccessAction } from 'src/app/auth/store/actions/register.action';
import { loginAction, loginSuccessAction, loginFailureAction } from '../actions/login.action';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { registerFailureAction } from './../actions/register.action';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { Router } from '@angular/router';



@Injectable()
export class RegisterEffects {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this.authService.register(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return registerSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error.errors }));
          })
        );
    })
  ));

  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap((({ request }) => {
      return this.authService.login(request)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token);
            return loginSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(loginFailureAction({ errors: errorResponse.error.errors }));
          })
        )
    }))
  ));

  redirectAfterSubmit$ = createEffect(() => this.actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      console.log('Success');
      this.router.navigateByUrl('/');
    }),
  ),
    { dispatch: false }
  );

  redirectAfterSignUP$ = createEffect(() => this.actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      console.log('Success');
      this.router.navigateByUrl('/');
    }),
  ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }

}
