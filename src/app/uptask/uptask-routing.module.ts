import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTasksComponent } from './lista-tasks/lista-tasks.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children: [
      {
        path:'tareas',
        component:ListaTasksComponent
      },{
        path:'**',
        redirectTo:'tareas'
      }
      
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UptaskRoutingModule { }
