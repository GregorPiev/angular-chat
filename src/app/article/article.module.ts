import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMessageModule } from 'src/app/shared/modules/error-message/error-message.module';
import { reducer } from 'src/app/article/store/reducer';
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module';
import { ArticleComponent } from 'src/app/article/components/article/article.component';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.services';
import { GetArticleEffects } from 'src/app/article/store/effects/getArticle.effect';
import { TagListModule } from 'src/app/shared/modules/tag-list/tag-list.module';
import { ArticleService } from 'src/app/article/services/article.service';
import { DeleteArticleEffects } from 'src/app/article/store/effects/deleteArticle.effect';

const routes: Routes = [{
  path: 'articles/:slug',
  component: ArticleComponent
}];


@NgModule({
  declarations: [ArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetArticleEffects, DeleteArticleEffects]),
    StoreModule.forFeature('article', reducer),
    HttpClientModule,
    ErrorMessageModule,
    LoadingModule,
    TagListModule,
    ErrorMessageModule
  ],
  exports: [],
  providers: [
    SharedArticleService,
    ArticleService
  ]
})
export class ArticleModule { }
