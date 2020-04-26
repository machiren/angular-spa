import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit {
  users: User[];

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.users = this.activeRoute.snapshot.data.users;
  }

}
