import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('total') totalProps: number;
  // tslint:disable-next-line:no-input-rename
  @Input('limit') limitProps: number;
  // tslint:disable-next-line:no-input-rename
  @Input('currentPage') currentPageProps: number;
  // tslint:disable-next-line: no-input-rename
  @Input('url') urlProps: string;
  pagesCount: number;
  pages: number[];

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.totalProps / this.limitProps);
    this.pages = this.utils.range(1, this.pagesCount);
  }

}
