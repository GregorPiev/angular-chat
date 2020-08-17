
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface } from 'src/app/shared/types/appTypes.interface';
import { TagStateInterface } from 'src/app/shared/modules/tags/types/TagState.interface';

export const TagsFeatureSelector = createFeatureSelector<
  AppStateInterface,
  TagStateInterface
>('tags');

export const isLoadingSelector = createSelector(
  TagsFeatureSelector,
  (tagsState: TagStateInterface) => tagsState.isLoading
);

export const tagsSelector = createSelector(
  TagsFeatureSelector,
  (tagsState: TagStateInterface) => tagsState.tags
);

export const errorSelector = createSelector(
  TagsFeatureSelector,
  (tagsState: TagStateInterface) => tagsState.error
);
