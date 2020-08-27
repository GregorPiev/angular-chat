import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of, pipe } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';
import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from '../actions/createArticle.action';
import { CreateArticleService } from '../../services/createArticle.service';
import { Router } from '@angular/router';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';


@Injectable()
export class CreateArticleEffects {
  createArticle$ = createEffect(() => this.actions$.pipe(
    ofType(createArticleAction),
    switchMap((({ articleInput }) => {
      return this.createArticleService.createArticle(articleInput)
        .pipe(
          map((article: ArticleInterface) => {
            return createArticleSuccessAction({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(createArticleFailureAction({ errors: errorResponse.error.errors }));
          })
        )
    }))
  ));

  redirectAfterSubmit$ = createEffect(
    () => this.actions$.pipe(
      ofType(createArticleSuccessAction),
      tap(({ article }) => {
        this.router.navigate(['/articles', article.slug]);
      }),
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router

  ) { }

}
