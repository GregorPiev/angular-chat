import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { EditArticleService } from './services/editArticle.service';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { EditArticleEffects } from './store/effects/editArticle.effects';
import { ArticleService as SharedArticleService } from '../shared/services/article.services'
import { GetArticleEffects } from './store/effects/getArticle.effect';
import { reducer } from './store/reducer';
import { LoadingModule } from './../shared/modules/loading/loading.module';

const routes: Routes = [
  { path: 'articles/:slug/edit', component: EditArticleComponent }
];


@NgModule({
  declarations: [EditArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffects, EditArticleEffects]),
    StoreModule.forFeature('editArticle', reducer),
    ArticleFormModule,
    LoadingModule
  ],
  providers: [
    EditArticleService,
    SharedArticleService
  ]
})



export class EditArticleModule { }
