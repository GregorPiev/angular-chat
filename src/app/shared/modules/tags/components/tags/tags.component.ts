import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getTagsAction } from '../../store/actions/getTags.action';
import { Observable } from 'rxjs';
import { isLoadingSelector, errorSelector, tagsSelector } from 'src/app/shared/modules/tags/store/selector';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html'
})
export class TagsComponent implements OnInit {
  tags$: Observable<PopularTagType[] | null>;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
  }

  initializeValues() {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.tags$ = this.store.pipe(select(tagsSelector));
  }

  fetchData(): void {
    this.store.dispatch(getTagsAction());
  }

}
