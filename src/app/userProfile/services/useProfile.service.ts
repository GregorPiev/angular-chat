import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { ProfileInterface } from 'src/app/shared/types/profile.interface';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';

@Injectable()

export class UseProfileService {
  constructor(
    private http: HttpClient
  ) { }

  getUserProfile(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http.get(url).
      pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      );
  }

  setUserProfileFollower(slug: string): Observable<ProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}/follow`;
    return this.http.post(url, {})
      .pipe(
        map((response: GetUserProfileResponseInterface) => response.profile)
      )
  }


}
