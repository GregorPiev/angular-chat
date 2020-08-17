import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedStateInterface } from '../types/feedState.interface';
import { AppStateInterface } from 'src/app/shared/types/appTypes.interface';

export const feedFeatureSelector = createFeatureSelector<
  AppStateInterface,
  FeedStateInterface
>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.isLoading
);
export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.data
);
export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: FeedStateInterface) => feedState.error
);
