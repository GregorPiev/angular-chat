import {PopularTagsStateInterface} from '../types/popularTagsState.interface'
import {createReducer, on, Action} from '@ngrx/store'
import {
  getPopularTagsAction,
  getPopularTagsSuccessAction,
  getPopularTagsFailure
} from './actions/getPopularTags.action'

const initialState: PopularTagsStateInterface = {
  data: null,
  isLoading: false,
  error: null
}

const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: true
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): PopularTagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.popularTags
    })
  ),
  on(
    getPopularTagsFailure,
    (state): PopularTagsStateInterface => ({
      ...state,
      isLoading: false
    })
  )
)

export function reducers(state: PopularTagsStateInterface, action: Action) {
  return popularTagsReducer(state, action)
}
