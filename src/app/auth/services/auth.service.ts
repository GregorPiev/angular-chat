import { Injectable } from '@angular/core';
import { RegisterRequestInterface } from '../types/registerRequest.interface';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUserInterface } from '../../shared/types/currentUser.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface';
import { LoginRequestInterface } from './../types/loginRequest.interface';

@Injectable()
export class AuthService {
  url = `${environment.apiUrl}/users`;
  constructor(
    private http: HttpClient
  ) { }

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(this.url, data)
      .pipe(
        map((response: AuthResponseInterface) => response.user)
      );
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    return this.http
      .post<AuthResponseInterface>(`${this.url}/login`, data)
      .pipe(
        map((response: AuthResponseInterface) => response.user)
      );
  }

  getCurrentUser(): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/user';
    return this.http.get(url)
      .pipe(
        map(
          (response: AuthResponseInterface) => response.user
        )
      );
  }
}
