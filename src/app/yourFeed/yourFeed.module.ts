import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YourFeedComponent } from './components/your-feed/your-feed.component';
import { BannerModule } from './../shared/modules/banner/banner.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feedToggler.module';
import { FeedModule } from '../shared/modules/feed/feed.module';
import { TagsModule } from 'src/app/shared/modules/tags/tags.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent,
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [YourFeedComponent],
  imports: [
    CommonModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    TagsModule,
    RouterModule.forChild(routes)
  ]
})

export class YourFeedModule { }
