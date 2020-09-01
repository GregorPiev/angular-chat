
import { SettingsStateInterface } from './../types/settingsState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { updateCurrentUserAction, updateCurrentUserSuccessAction, updateCurrentUserFailureAction } from './../../auth/store/actions/updateCurrentUser.action';


const initialState: SettingsStateInterface = {
  isSubmitting: false,
  validationErrors: null
};

const settingReducer = createReducer(
  initialState,
  on(
    updateCurrentUserAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: true
    })
  ),
  on(
    updateCurrentUserSuccessAction,
    (state): SettingsStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateCurrentUserFailureAction,
    (state, action): SettingsStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )

);

export function reducers(state: SettingsStateInterface, action: Action) {
  return settingReducer(state, action);
}


