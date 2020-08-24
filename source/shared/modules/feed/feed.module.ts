import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EffectsModule} from '@ngrx/effects'
import {RouterModule} from '@angular/router'
import {StoreModule} from '@ngrx/store'

import {FeedComponent} from 'src/app/shared/modules/feed/components/feed/feed.component'
import {FeedService} from 'src/app/shared/modules/feed/services/feed.service'
import {GetFeedEffect} from 'src/app/shared/modules/feed/store/effects/getFeed.effect'
import {reducers} from 'src/app/shared/modules/feed/store/reducers'
import {ErrorMessageModule} from 'src/app/shared/modules/errorMessage/errorMessage.module'
import {LoadingModule} from 'src/app/shared/modules/loading/loading.module'
import {PaginationModule} from 'src/app/shared/modules/pagination/pagination.module'
import {TagListModule} from '../tagList/tagList.module'

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    PaginationModule,
    TagListModule
  ],
  declarations: [FeedComponent],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule {}
