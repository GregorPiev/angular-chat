import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { UseProfileService } from '../../services/useProfile.service';
import { getUserProfileAction, getUserProfileSuccessAction, getUserProfileFailureAction } from './../action/getUserProfile.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProfileInterface } from './../../../shared/types/profile.interface';
import { of, pipe } from 'rxjs';


@Injectable()
export class GetUserProfileEffect {
  getUserProfile = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserProfileAction),
      switchMap((({ slug }) => {
        return this.userProfileService.getUserProfile(slug)
          .pipe(
            map((userProfile: ProfileInterface) => {
              return getUserProfileSuccessAction({ userProfile });
            }),
            catchError(() => {
              return of(getUserProfileFailureAction());
            })
          );
      }
      )
      )
    ));

  constructor(
    private actions$: Actions,
    private userProfileService: UseProfileService
  ) { }
}

