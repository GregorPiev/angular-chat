import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleFormComponent } from 'src/app/shared/modules/articleForm/components/articleForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackendErrorMessagesModule } from '../backendErrorMessages/backendErrorMessages.module';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesModule
  ],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent]
})

export class ArticleFormModule { }
