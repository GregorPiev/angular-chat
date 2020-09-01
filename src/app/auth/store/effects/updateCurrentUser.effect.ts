import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction } from '../actions/updateCurrentUser.action';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class UpdateCurrentUserEffects {
  updateCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(updateCurrentUserAction),
    switchMap(({ currentUserInput }) => {
      return this.authService.updateCurrentUser(currentUserInput)
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            return updateCurrentUserSuccessAction({ currentUser });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(updateCurrentUserFailureAction({ errors: errorResponse.error.errors }));
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

}
