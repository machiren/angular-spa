import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './guard/auth.guard';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
      { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
      { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
      { path: 'users', canActivate: [AuthGuard], loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule) },
      { path: '**', redirectTo: 'home' }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
