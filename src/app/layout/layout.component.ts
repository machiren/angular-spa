import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less']
})
export class LayoutComponent implements OnInit {

  isLogin: boolean = false;
  isCollapsed: boolean = false;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onClickLogin() {
    this.auth;
  }

  onClickLogout() {
    this.auth.logout();
  }

}
