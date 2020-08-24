import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormModule } from 'src/app/shared/modules/articleForm/articleForm.module';

const routes: Routes = [
  { path: 'articles/new', component: CreateArticleComponent }
];


@NgModule({
  declarations: [CreateArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ArticleFormModule
  ]
})



export class CreateArticleModule { }
