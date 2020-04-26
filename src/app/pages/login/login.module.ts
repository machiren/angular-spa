import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { NzCardModule, NzInputModule, NzCheckboxModule, NzButtonModule, NzFormModule } from 'ng-zorro-antd';

const routes: Routes = [
  { path: '', component: LoginComponent },
];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CommonModule,
    NzFormModule,
    NzCardModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
  ]
})
export class LoginModule { }
