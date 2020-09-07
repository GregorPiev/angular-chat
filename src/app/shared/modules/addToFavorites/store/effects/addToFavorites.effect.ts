import { Injectable } from '@angular/core';
import { AddToFavoritesService } from '../../addToFavorites.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import {
  addToFavoritesAction,
  addToFavoritesFailureAction,
  addToFavoritesSuccessAction
} from '../actions/addToFavorites.action';
import { ArticleInterface } from 'src/app/shared/types/article.interface';


@Injectable()

export class AddToFavoritesEffect {
  addToFavorites$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addToFavoritesAction),
      switchMap(({ isFavorited, slug }) => {
        const article$ = isFavorited
          ? this.addToFavoritesService.removeFromFavorites(slug)
          : this.addToFavoritesService.addToFavorites(slug)

        return article$.pipe(
          map((article: ArticleInterface) => {
            return addToFavoritesSuccessAction({ article })
          }),
          catchError(() => {
            return of(addToFavoritesFailureAction());
          })
        )
      })
    ));

  constructor(
    private actions$: Actions,
    private addToFavoritesService: AddToFavoritesService,

  ) { }

}
