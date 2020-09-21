import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './actionTypes';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';

export const setUserProfileFollowAction = createAction(
  ActionTypes.SET_USER_PROFILE_FOLLOW,
  props<{ slug: string }>()
);

export const setUserProfileFollowSuccessAction = createAction(
  ActionTypes.SET_USER_PROFILE_FOLLOW_SUCCESS,
  props<{ userProfile: ProfileInterface }>()
);

export const setUserProfileFollowFailureAction = createAction(
  ActionTypes.SET_USER_PROFILE_FOLLOW_FAILURE
);
