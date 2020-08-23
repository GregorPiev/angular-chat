import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { GetArticleResponseInterface } from 'src/app/shared/types/GetArticleResponse.interface';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { map } from 'rxjs/operators';


@Injectable()

export class ArticleService {
  constructor(
    private http: HttpClient
  ) { }
  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;
    return this.http.get<GetArticleResponseInterface>(fullUrl).
      pipe(
        map((response: GetArticleResponseInterface) => {
          return response.article;
        })
      );
  }
}
