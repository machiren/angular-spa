import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { UserService } from '../api/user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwt: JwtHelperService, private router: Router, private user: UserService) { }

  get accessToken() {
    return localStorage.getItem('access_token');
  }

  get account() {
    return JSON.parse(localStorage.getItem('auth_user'));
  }

  static tokenGetter() {
    return localStorage.getItem('auth_token');
  }

  // async login(params): Promise<Account> {
  //   const credential = await this.user.login(params).toPromise();
  //   localStorage.setItem('access_token', credential.accessToken);
  //   localStorage.setItem('auth_user', JSON.stringify(credential.account));
  //   return credential.account;
  // }


  logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('access_token');
    localStorage.removeItem('auth_user');
  }


  isAuthorized(): boolean {
    return !this.jwt.isTokenExpired(this.accessToken);
  }



}
