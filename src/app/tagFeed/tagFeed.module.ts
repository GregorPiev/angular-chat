import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagFeedComponent } from './components/tag-feed/tag-feed.component';
import { BannerModule } from './../shared/modules/banner/banner.module';
import { FeedTogglerModule } from 'src/app/shared/modules/feedToggler/feedToggler.module';
import { FeedModule } from './../shared/modules/feed/feed.module';
import { TagsModule } from 'src/app/shared/modules/tags/tags.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent,
    pathMatch: 'full'
  }

]
@NgModule({
  declarations: [TagFeedComponent],
  imports: [
    CommonModule,
    BannerModule,
    FeedTogglerModule,
    FeedModule,
    TagsModule,
    RouterModule.forChild(routes)
  ],
  exports: [TagFeedComponent]
})

export class TagFeedModule { }
