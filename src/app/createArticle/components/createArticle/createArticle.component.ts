import { Component } from "@angular/core";

@Component({
  selector: 'app-create-article',
  templateUrl: './createArticle.component.html'
})

export class CreateArticleComponent {
  initialValues = {
    title: 'Foo',
    description: 'Bar',
    body: 'Baz',
    tagList: ['123']
  }

  onSubmit(res: any) {
    console.log('On Submit in parent:', res);
  }

}
