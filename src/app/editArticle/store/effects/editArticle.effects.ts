import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import { of, pipe } from 'rxjs';
import { switchMap, catchError, map, tap } from 'rxjs/operators';

import { Router } from '@angular/router';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { editArticleAction, editArticleSuccessAction, editArticleFailureAction } from '../actions/editArticle.action';
import { EditArticleService } from '../../services/editArticle.service';


@Injectable()
export class EditArticleEffects {
  editArticle$ = createEffect(() =>
    this.actions$.pipe(
      ofType(editArticleAction),
      switchMap((({ articleInput, slug }) => {
        return this.editArticleService.updateArticle(slug, articleInput)
          .pipe(
            map((article: ArticleInterface) => {
              return editArticleSuccessAction({ article });
            }),
            catchError((errorResponse: HttpErrorResponse) => {
              return of(editArticleFailureAction({ errors: errorResponse.error.errors }));
            })
          );
      }))
    ));

  redirectAfterUpdate$ = createEffect(
    () => this.actions$.pipe(
      ofType(editArticleSuccessAction),
      tap(({ article }) => {
        this.router.navigate(['/articles', article.slug]);
      }),
    ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router

  ) { }

}
