import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-backend-error-messages',
  templateUrl: './backendErrorMessages.component.html',
  styleUrls: ['./backendErrorMessages.component.css'],
})
export class BackendErrorMessagesComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;
  errorMessages: string[];

  ngOnInit() {
    console.log('Error message', this.backendErrorsProps);
    this.errorMessages = Object.keys(this.backendErrorsProps).map(
      (name: string) => {
        const messages = this.backendErrorsProps[name].join(', ');
        return `${name} ${messages}`;
      }
    )
  }
}
