import {createReducer, on, Action} from '@ngrx/store'
import {routerNavigationAction} from '@ngrx/router-store'

import {ArticleStateInterface} from 'src/app/article/types/articleState.interface'
import {
  getArticleAction,
  getArticleSuccessAction,
  getArticleFailureAction
} from 'src/app/article/store/actions/getArticle.action'

const initialState: ArticleStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): ArticleStateInterface => ({
      ...state,
      isLoading: false,
      data: action.article
    })
  ),
  on(
    getArticleFailureAction,
    (state): ArticleStateInterface => ({
      ...state,
      isLoading: false
    })
  ),
  on(routerNavigationAction, (): ArticleStateInterface => initialState)
)

export function reducers(state: ArticleStateInterface, action: Action) {
  return articleReducer(state, action)
}
