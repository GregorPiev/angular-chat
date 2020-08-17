import { FeedStateInterface } from 'src/app/shared/modules/feed/types/feedState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { getFeedAction, getFeedSuccessAction, getFeedFailureAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import { routerNavigatedAction } from '@ngrx/router-store';

const initialState: FeedStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): FeedStateInterface => ({
      ...state,
      isLoading: false,
      data: action.feed,
      error: null
    })
  ),
  on(
    getFeedFailureAction,
    (state): FeedStateInterface => ({
      ...state,
      isLoading: false,
      error: 'Error'
    })
  ),
  on(
    routerNavigatedAction,
    (): FeedStateInterface => initialState)
);

export function reducer(state: FeedStateInterface, action: Action) {
  return feedReducer(state, action);
}
