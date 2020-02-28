import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule, NzDropDownModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzDropDownModule,
    RouterModule
  ]
})
export class LayoutModule { }
