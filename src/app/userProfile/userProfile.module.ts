import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UseProfileComponent } from './components/useProfile/useProfile.component';
import { UseProfileService } from './services/useProfile.service';
import { EffectsModule } from '@ngrx/effects';
import { GetUserProfileEffect } from './store/effects/getUserProfile.effect';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducer';
import { FeedModule } from './../shared/modules/feed/feed.module';

const routes: Routes = [
  {
    path: 'profiles/:slug',
    component: UseProfileComponent
  },
  {
    path: 'profiles/:slug/favorites',
    component: UseProfileComponent
  },

];

@NgModule({
  declarations: [UseProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetUserProfileEffect]),
    StoreModule.forFeature('userProfile', reducer),
    FeedModule
  ],

  providers: [UseProfileService]
})

export class UseProfileModule { }

