import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-message',
  template: '<div>{{messageProps}}</div>'
})
export class ErrorMessageComponent {
  // tslint:disable-next-line: no-input-rename
  @Input('message') messageProps = 'Something went wrong';
}
