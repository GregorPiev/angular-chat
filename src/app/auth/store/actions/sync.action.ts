import { createAction } from '@ngrx/store';
import { ActionTypes } from './actionsType';


export const logoutAction = createAction(ActionTypes.LOGOUT);
