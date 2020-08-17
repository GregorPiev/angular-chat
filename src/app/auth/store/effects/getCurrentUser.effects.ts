import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { getCurrentUserAction, getCurrentUserSuccessAction, getCurrentUserFailureAction } from '../actions/getCurrentUser.action';

import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { PersistanceService } from 'src/app/shared/services/persistance.service';




@Injectable()
export class GetCurrentUserEffects {
  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        return of(getCurrentUserFailureAction());
      }
      return this.authService.getCurrentUser()
        .pipe(
          map((currentUser: CurrentUserInterface) => {
            return getCurrentUserSuccessAction({ currentUser });
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction());
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,

  ) { }

}
