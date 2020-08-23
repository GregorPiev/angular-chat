import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleStateInterface } from 'src/app/article/types/articleState.interface';
import { AppStateInterface } from 'src/app/shared/types/appTypes.interface';

export const articleFeatureSelector = createFeatureSelector<
  AppStateInterface,
  ArticleStateInterface
>('article');

export const isLoadingSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.isLoading
);
export const articleSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.data
);
export const errorSelector = createSelector(
  articleFeatureSelector,
  (articleState: ArticleStateInterface) => articleState.error
);
