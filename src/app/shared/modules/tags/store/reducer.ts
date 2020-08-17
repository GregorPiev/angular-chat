import { createReducer, on, Action } from '@ngrx/store';
import { getTagsAction, getTagsSuccessAction, getTagsFailureAction } from 'src/app/shared/modules/tags/store/actions/getTags.action';
import { TagStateInterface } from '../types/TagState.interface';

const initialState: TagStateInterface = {
  isLoading: false,
  error: null,
  tags: null
};

const tagReducer = createReducer(
  initialState,
  on(
    getTagsAction,
    (state): TagStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getTagsSuccessAction,
    (state, action): TagStateInterface => ({
      ...state,
      isLoading: false,
      tags: action.tags
    })
  ),
  on(
    getTagsFailureAction,
    (state): TagStateInterface => ({
      ...state,
      isLoading: false,
      error: 'Error'
    })
  )
);

export function reducer(state: TagStateInterface, action: Action) {
  return tagReducer(state, action);
}
