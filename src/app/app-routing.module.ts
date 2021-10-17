import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule),
    
  },
  {
    path: 'uptask',
    loadChildren:()=>import('./uptask/uptask.module').then(m=>m.UptaskModule),
    
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
