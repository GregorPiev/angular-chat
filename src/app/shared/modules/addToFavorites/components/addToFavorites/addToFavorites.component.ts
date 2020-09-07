import { Component, Input, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';
import { addToFavoritesAction } from '../../store/actions/addToFavorites.action';

@Component({
  selector: 'app-add-to-favorites',
  templateUrl: './addToFavorites.component.html'
})
export class AddToFavoritesComponent implements OnInit {
  @Input('isFavorited') isFavoritedProps: boolean;
  @Input('articleSlug') articleSlugProps: string;
  @Input('favoritesCount') favoritesCountProps: number;
  favoritesCount: number = 5;
  isFavorited: boolean;

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.isFavorited = this.isFavoritedProps;
    this.favoritesCount = this.favoritesCountProps;

  }
  handleLike() {
    this.store.dispatch(
      addToFavoritesAction(
        {
          isFavorited: this.isFavorited,
          slug: this.articleSlugProps
        }
      )
    )
    if (this.isFavorited) {
      this.favoritesCount = this.favoritesCount - 1;
    } else {
      this.favoritesCount = this.favoritesCount + 1;
    }
    this.isFavorited = !this.isFavorited;
  }
}
