import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { ArticleService } from 'src/app/article/services/article.service';
import {
  deleteArticleAction,
  deleteArticleSuccessAction,
  deleteArticleFailureAction
} from '../actions/delArticle.action';
import { Router } from '@angular/router';

@Injectable()
export class DeleteArticleEffects {
  deleteArticle$ = createEffect(() => this.actions$.pipe(
    ofType(deleteArticleAction),
    switchMap(({ slug }) => {
      return this.articleService.deleteArticle(slug)
        .pipe(
          map(() => {
            return deleteArticleSuccessAction();
          }),
          catchError(() => {
            return of(deleteArticleFailureAction());
          })
        );
    })
  ));

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteArticleSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/');
        })
      ),
    { dispatch: false }
  );


  constructor(
    private actions$: Actions,
    private articleService: ArticleService,
    private router: Router

  ) { }

}
