import { createArticleStateInterface } from 'src/app/shared/types/createArticleState.interface';
import { createReducer, on, Action } from '@ngrx/store';
import { createArticleAction, createArticleSuccessAction, createArticleFailureAction } from './actions/createArticle.action';


const initialSate: createArticleStateInterface = {
  isSubmitting: false,
  validationErrors: null
};

const createArticleReducer = createReducer(
  initialSate,
  on(
    createArticleAction,
    (state): createArticleStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null
    })
  ),
  on(
    createArticleSuccessAction,
    (state, action): createArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null
    })
  ),
  on(
    createArticleFailureAction,
    (state, action): createArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    })
  )
);

export function reducer(state: createArticleStateInterface, action: Action) {
  return createArticleReducer(state, action);
}
