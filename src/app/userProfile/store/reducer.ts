
import { UserProfileStateInterface } from './../types/userProfileState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import {
  getUserProfileAction,
  getUserProfileSuccessAction,
  getUserProfileFailureAction
} from './action/getUserProfile.action';
import {
  setUserProfileFollowAction,
  setUserProfileFollowSuccessAction,
  setUserProfileFollowFailureAction
} from './action/setUserProfileFollowing.action';

const initialState: UserProfileStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
      data: action.userProfile
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): UserProfileStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),

  on(
    setUserProfileFollowAction,
    (state): UserProfileStateInterface => ({
      ...state
    })
  ),
  on(
    setUserProfileFollowSuccessAction,
    (state, action): UserProfileStateInterface => ({
      ...state,
      data: action.userProfile
    })
  ),
  on(
    setUserProfileFollowFailureAction,
    (state): UserProfileStateInterface => ({
      ...state
    })
  )
);

export function reducer(state: UserProfileStateInterface, action: Action) {
  return userProfileReducer(state, action);
}
