import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagsComponent } from './components/tags/tags.component';
import { RouterModule } from '@angular/router';
import { TagService } from 'src/app/shared/modules/tags/services/tag.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from 'src/app/shared/modules/tags/store/reducer';
import { GetTagsEffects } from 'src/app/shared/modules/tags/store/effects/getTags.effect';
import { LoadingModule } from './../loading/loading.module';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';

@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    LoadingModule,
    ErrorMessageModule,
    RouterModule,
    StoreModule.forFeature('tags', reducer),
    EffectsModule.forFeature([GetTagsEffects])
  ],
  exports: [TagsComponent],
  providers: [TagService]
})
export class TagsModule { }
