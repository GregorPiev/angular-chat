import { Component, OnInit, Input, OnDestroy, SimpleChange } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { Observable, Subscription } from 'rxjs';
import { GetFeedResponseInterface } from '../../types/GetFeedResponse.interface';
import { isLoadingSelector, errorSelector } from '../../store/selector';
import { feedSelector } from './../../store/selector';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { parseUrl, stringify } from 'query-string';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line: no-input-rename
  @Input('apiUrl') apiUrlProps: string;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  feed$: Observable<GetFeedResponseInterface | null>;
  limit = environment.limit;
  baseUrl: string;
  Subs: Subscription;
  currentPage: number;


  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.fetchData();
    this.initializeValues();
    this.initializeListeners();
  }

  fetchData(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(getFeedAction({ url: apiUrlWithParams }));
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initializeListeners(): void {
    this.Subs = this.route.queryParams
      .subscribe(params => {
        this.currentPage = Number(params.page || '1');
        this.fetchData();
      });
  }

  ngOnDestroy(): void {
    if (this.Subs) {
      this.Subs.unsubscribe();
    }
  }

  ngOnChanges(changes: SimpleChange): void {
    const isApiUrlChanged =
      !changes['apiUrlProps'].firstChange &&
      changes['apiUrlProps'].currentValue !== changes['apiUrlProps'].previousValue;
    if (isApiUrlChanged) {
      this.fetchData();
    }
  }
}
