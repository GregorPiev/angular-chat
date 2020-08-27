import { createFeatureSelector, createSelector } from '@ngrx/store';
import { createArticleStateInterface } from 'src/app/shared/types/createArticleState.interface';
import { AppStateInterface } from 'src/app/shared/types/appTypes.interface';

export const createArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  createArticleStateInterface
>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: createArticleStateInterface) => createArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: createArticleStateInterface) => createArticleState.validationErrors
);
