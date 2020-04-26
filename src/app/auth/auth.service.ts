import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwt: JwtHelperService, private router: Router, private http: HttpClient) { }

  get accessToken() {
    return localStorage.getItem('accessToken');
  }

  static tokenGetter() {
    return localStorage.getItem('authToken');
  }

  async login(body: User): Promise<Account> {
    try {
      const credential = await this.http.post<any>('signin', body).toPromise();
      localStorage.setItem('accessToken', credential.accessToken);
      return credential.accessToken;
    } catch (err) {
      throw err;
    }
  }

  logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('accessToken');
  }

  isAuthorized(): boolean {
    return !this.jwt.isTokenExpired(this.accessToken);
  }
}
