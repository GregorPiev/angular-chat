import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of, pipe } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import { ArticleInterface } from 'src/app/shared/types/article.interface';

import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from '../actions/getArticle.action';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.services';


@Injectable()
export class GetArticleEffects {
  getArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getArticleAction),
      switchMap((({ slug }) => {
        return this.sharedArticleService.getArticle(slug)
          .pipe(
            map((article: ArticleInterface) => {
              return getArticleSuccessAction({ article });
            }),
            catchError(() => {
              return of(getArticleFailureAction());
            })
          );
      }))
    ));


  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService

  ) { }

}
