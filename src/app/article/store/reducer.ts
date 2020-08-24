import { createReducer, on, Action } from '@ngrx/store';
import { routerNavigatedAction } from '@ngrx/router-store';
import { ArticleStateInterface } from '../types/articleState.interface';
import { getArticleAction, getArticleSuccessAction, getArticleFailureAction } from './actions/getArticle.action';
import { deleteArticleAction } from 'src/app/article/store/actions/delArticle.action';

const initialState: ArticleStateInterface = {
  isLoading: false,
  error: null,
  data: null
};

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true,
      error: null
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article,
      error: null
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      error: 'Error'
    })
  ),
  on(
    routerNavigatedAction,
    (): ArticleStateInterface => initialState)
);

export function reducer(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action);
}
