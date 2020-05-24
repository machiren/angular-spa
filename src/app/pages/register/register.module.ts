import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { NzFormModule, NzInputModule, NzCardModule, NzButtonModule, NzCheckboxModule } from 'ng-zorro-antd';


const routes: Routes = [
  { path: '', component: RegisterComponent },
];

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzButtonModule,
    NzCheckboxModule
  ]
})
export class RegisterModule { }
