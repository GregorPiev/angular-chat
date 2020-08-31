import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appTypes.interface';
import { editArticleStateInterface } from 'src/app/shared/types/editArticleState.interface';

export const editArticleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  editArticleStateInterface
>('editArticle');

export const isSubmittingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: editArticleStateInterface) => editArticleState.isSubmitting
);

export const validationErrorsSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: editArticleStateInterface) => editArticleState.validationErrors
);

export const isLoadingSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: editArticleStateInterface) => editArticleState.isLoading
);

export const articleSelector = createSelector(
  editArticleFeatureSelector,
  (editArticleState: editArticleStateInterface) => editArticleState.article
);
