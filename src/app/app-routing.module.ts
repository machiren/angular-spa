import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: '**', redirectTo: 'home' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
