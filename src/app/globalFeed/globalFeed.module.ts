import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalFeedComponent } from './components/globalFeed/globalFeed.component';
import { Routes, RouterModule } from '@angular/router';
import { FeedModule } from 'src/app/shared/modules/feed/feed.module';
import { BannerModule } from 'src/app/shared/modules/banner/banner.module';
import { TagsModule } from 'src/app/shared/modules/tags/tags.module';
import { FeedTogglerModule } from '../shared/modules/feedToggler/feedToggler.module';
const routes: Routes = [
  { path: '', component: GlobalFeedComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [GlobalFeedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FeedModule,
    BannerModule,
    TagsModule,
    FeedTogglerModule
  ]
})
export class GlobalFeedModule { }
