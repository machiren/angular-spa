import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule, Routes } from '@angular/router';
import { UserResolver } from '../../router/resolvers/user.resolver';

const routes: Routes = [
  { path: '', resolve: { users: UserResolver }, component: UserComponent }
];

@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class UserModule { }
