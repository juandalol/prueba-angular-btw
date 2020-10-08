import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./components/auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/auth/register/register.module').then(m => m.RegisterModule) }
  // {path: '', component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
