import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { GetFeedEffects } from 'src/app/shared/modules/feed/store/effects/getFeed.effect';
import { reducer } from 'src/app/shared/modules/feed/store/reducer';
import { FeedComponent } from './components/feed/feed.component';
import { FeedService } from '../../services/feed.services';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { LoadingModule } from './../loading/loading.module';
import { PaginationModule } from 'src/app/shared/modules/pagination/pagination.module';
import { TagListModule } from './../tag-list/tag-list.module';
import { AddToFavoritesModule } from '../addToFavorites/addToFavorites.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    RouterModule,
    CommonModule,
    EffectsModule.forFeature([GetFeedEffects]),
    StoreModule.forFeature('feed', reducer),
    HttpClientModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule,
    AddToFavoritesModule
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
