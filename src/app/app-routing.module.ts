import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
    
  },
  {
    path: 'uptask',
    loadChildren:()=>import('./uptask/uptask.module').then(m=>m.UptaskModule),
    canLoad:[AuthGuard],
    canActivate:[AuthGuard]
  },
  {
    path:'**',
    redirectTo:'auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
