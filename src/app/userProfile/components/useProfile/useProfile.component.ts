import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileInterface } from './../../../shared/types/profile.interface';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getUserProfileAction } from '../../store/action/getUserProfile.action';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { isLoadingSelector, errorSelector, userProfileSelector } from '../../store/selectors/selector';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { filter, map } from 'rxjs/operators';
import { CurrentUserInterface } from './../../../shared/types/currentUser.interface';

@Component({
  selector: 'app-use-profile',
  templateUrl: './useProfile.component.html'
})
export class UseProfileComponent implements OnInit, OnDestroy {
  slug: string;
  userProfile: ProfileInterface | null;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  userProfileSubscription: Subscription;
  apiUrl: string;
  isCurrentUserProfile$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.initializeValues();
    this.initialListener();
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));


    // tslint:disable-next-line: deprecation
    this.isCurrentUserProfile$ = combineLatest(
      this.store.pipe(select(currentUserSelector), filter(Boolean)),
      this.store.pipe(select(userProfileSelector), filter(Boolean))
    )
      .pipe(
        map(([currentUser, userProfile]: [CurrentUserInterface, ProfileInterface]) => {
          return currentUser.username === userProfile.username;
        })
      );

    this.route.params.subscribe((param: Params) => {
      // tslint:disable-next-line:no-string-literal
      this.slug = param['slug'];
      this.fetchData();
    });
  }

  initialListener(): void {
    this.userProfileSubscription = this.store
      .pipe(select(userProfileSelector))
      // tslint:disable-next-line: deprecation
      .subscribe((userProfile: ProfileInterface) => {
        this.userProfile = userProfile;
      });
  }

  fetchData(): void {
    this.store.dispatch(getUserProfileAction({ slug: this.slug }));
  }

  getApiUrl() {
    const isFavorites = this.router.url.includes('favorites');
    return this.apiUrl = isFavorites
      ? `/articles?favorited = ${this.slug}`
      : `/articles?author=${this.slug}`;
  }

  ngOnDestroy(): void {
    if (this.userProfileSubscription) {
      this.userProfileSubscription.unsubscribe();
    }
  }
}
