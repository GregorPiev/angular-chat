import { createReducer, on, Action } from '@ngrx/store';
import {
  editArticleAction,
  editArticleSuccessAction,
  editArticleFailureAction
} from './actions/editArticle.action';
import { editArticleStateInterface } from 'src/app/shared/types/editArticleState.interface';
import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from './actions/getArticle.action';



const initialSate: editArticleStateInterface = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null
};

const editArticleReducer = createReducer(
  initialSate,
  on(
    editArticleAction,
    (state): editArticleStateInterface => ({
      ...state,
      isSubmitting: true,
      isLoading: true
    })
  ),
  on(
    editArticleSuccessAction,
    (state, action): editArticleStateInterface => ({
      ...state,
      isSubmitting: false

    })
  ),
  on(
    editArticleFailureAction,
    (state, action): editArticleStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: null
    })
  ),
  on(
    getArticleAction,
    (state): editArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): editArticleStateInterface => ({
      ...state,
      isLoading: false,
      article: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): editArticleStateInterface => ({
      ...state,
      isLoading: false
    })
  )
);
export function reducer(state: editArticleStateInterface, action: Action) {
  return editArticleReducer(state, action);
}
