import {Component, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'

import {getPopularTagsAction} from 'src/app/shared/modules/popularTags/store/actions/getPopularTags.action'
import {Observable} from 'rxjs'
import {PopularTagType} from 'src/app/shared/types/popularTag.type'
import {
  popularTagsSelector,
  isLoadingSelector,
  errorSelector
} from 'src/app/shared/modules/popularTags/store/selectors'

@Component({
  selector: 'mc-popular-tags',
  templateUrl: './popularTags.component.html'
})
export class PopularTagsComponent implements OnInit {
  popularTags$: Observable<PopularTagType[] | null>
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.initializeValues()
    this.fetchData()
  }

  initializeValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction())
  }
}
