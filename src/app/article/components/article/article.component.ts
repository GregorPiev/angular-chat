import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getArticleAction } from 'src/app/article/store/actions/getArticle.action';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, pipe, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { articleSelector, isLoadingSelector, errorSelector } from 'src/app/article/store/selector';
import { currentUserSelector } from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit, OnDestroy {
  slug: string;
  article: ArticleInterface | null;
  articleSubscription: Subscription;
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  isAuthor$: Observable<boolean>;

  constructor(
    private store: Store,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initializeValues();
    this.initializeListener();
    this.fetchData();
  }

  initializeValues(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorSelector));
    // tslint:disable-next-line: deprecation
    this.isAuthor$ = combineLatest(
      this.store.pipe(select(articleSelector)),
      this.store.pipe(select(currentUserSelector))
    )
      .pipe(
        map(
          ([article, currentUser]:
            [ArticleInterface | null,
              CurrentUserInterface | null]) => {
            console.log('map:', article, currentUser);
            if (!article || !currentUser) {
              return false;
            }
            return currentUser.username === article.author.username;
          }
        )
      );
  }

  fetchData(): void {
    this.store.dispatch(getArticleAction({ slug: this.slug }));
  }

  initializeListener(): void {
    this.articleSubscription = this.store
      .pipe(select(articleSelector))
      .subscribe((article: ArticleInterface | null) => {
        this.article = article;
      });
  }
  ngOnDestroy(): void {
    if (this.articleSubscription) {
      this.articleSubscription.unsubscribe();
    }
  }
}