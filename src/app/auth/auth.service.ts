import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private jwt: JwtHelperService, private router: Router) { }

  get accessToken() {
    return localStorage.getItem('auth');
  }

  get account() {
    return JSON.parse(localStorage.getItem('account'));
  }

  static tokenGetter() {
    return localStorage.getItem('auth_token');
  }

  // async login(params: LoginParams): Promise<Account> {
  //   const credential = await this.api.login(params).toPromise();
  //   localStorage.setItem('auth', credential.accessToken);
  //   localStorage.setItem('account', JSON.stringify(credential.account));
  //   return credential.account;
  // }


  logout(): void {
    this.router.navigateByUrl('/login');
    localStorage.removeItem('auth');
    localStorage.removeItem('account');
  }


  isAuthorized(): boolean {
    return !this.jwt.isTokenExpired(this.accessToken);
  }



}
