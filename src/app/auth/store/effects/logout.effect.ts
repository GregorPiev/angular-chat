import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { PersistanceService } from 'src/app/shared/services/persistance.service';
import { logoutAction } from './../actions/sync.action';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()

export class LogoutEffect {
  logout$ = createEffect(
    () => this.actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this.persistanceService.set('accessToken', '');
        this.router.navigateByUrl('/');
      })
    ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) { }

}
