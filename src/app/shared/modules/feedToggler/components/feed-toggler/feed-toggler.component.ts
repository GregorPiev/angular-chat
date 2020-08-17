import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector } from 'src/app/auth/store/selectors';

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss']
})
export class FeedTogglerComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('tagName') tagNameProps: string | null;
  isLoggedIn$: Observable<boolean>;
  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  initializeValues() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
  }

}
