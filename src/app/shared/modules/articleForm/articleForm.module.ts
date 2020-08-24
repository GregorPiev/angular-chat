import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent]
})

export class ArticleFormModule { }
