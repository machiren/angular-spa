import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule
  ]
})
export class LayoutModule { }
