import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PopularTagType } from 'src/app/shared/types/popularTag.type';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GetTagsResponseInterface } from '../types/getTagsResponse.interface';

@Injectable()

export class TagService {

  constructor(private http: HttpClient) { }
  getPopularTags(): Observable<PopularTagType[]> {
    const url = environment.apiUrl + '/tags';
    return this.http.get(url)
      .pipe(
        map((response: GetTagsResponseInterface) => {
          return response.tags;
        })
      );
  }
}
