import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';
import { TagService } from 'src/app/shared/modules/tags/services/tag.service';
import { getTagsAction, getTagsFailureAction, getTagsSuccessAction } from 'src/app/shared/modules/tags/store/actions/getTags.action';
import { GetTagsResponseInterface } from 'src/app/shared/modules/tags/types/getTagsResponse.interface';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';



@Injectable()
export class GetTagsEffects {
  getTags$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTagsAction),
      switchMap(() => {
        return this.tagService.getPopularTags()
          .pipe(
            map((tags: PopularTagType[]) => {
              return getTagsSuccessAction({ tags });
            }),
            catchError(() => {
              return of(getTagsFailureAction());
            })
          );
      })
    ));

  constructor(
    private actions$: Actions,
    private tagService: TagService,

  ) { }

}
