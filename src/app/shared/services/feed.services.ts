import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../modules/feed/types/GetFeedResponse.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class FeedService {
  constructor(
    private http: HttpClient
  ) { }
  getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;
    return this.http.get<GetFeedResponseInterface>(fullUrl);
  }
}
