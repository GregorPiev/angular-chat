import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';
import { CreateArticleService } from './services/createArticle.service';
import { EffectsModule } from '@ngrx/effects';
import { CreateArticleEffects } from './store/effects/createArticle.effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/createArticle/store/reducer';

const routes: Routes = [
  { path: 'articles/new', component: CreateArticleComponent }
];


@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([CreateArticleEffects]),
    StoreModule.forFeature('createArticle', reducer),
    ArticleFormModule
  ],
  providers: [CreateArticleService]
})



export class CreateArticleModule { }
