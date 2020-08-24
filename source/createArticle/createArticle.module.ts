import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {CreateArticleComponent} from 'src/app/createArticle/components/createArticle/createArticle.component'
import {RouterModule} from '@angular/router'
import {ArticleFormModule} from 'src/app/shared/modules/articleForm/articleForm.module'

const routes = [
  {
    path: 'articles/new',
    component: CreateArticleComponent
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ArticleFormModule],
  declarations: [CreateArticleComponent]
})
export class CreateArticleModule {}
