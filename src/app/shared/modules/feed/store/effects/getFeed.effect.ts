import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { FeedService } from 'src/app/shared/services/feed.services';
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from '../actions/getFeed.action';
import { GetFeedResponseInterface } from 'src/app/shared/modules/feed/types/GetFeedResponse.interface';




@Injectable()
export class GetFeedEffects {
  getFeed$ = createEffect(() => this.actions$.pipe(
    ofType(getFeedAction),
    switchMap(({ url }) => {
      return this.feedService.getFeed(url)
        .pipe(
          map((feed: GetFeedResponseInterface) => {
            return getFeedSuccessAction({ feed });
          }),
          catchError(() => {
            return of(getFeedFailureAction());
          })
        );
    })
  ));

  constructor(
    private actions$: Actions,
    private feedService: FeedService,

  ) { }

}
