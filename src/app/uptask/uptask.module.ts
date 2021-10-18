import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UptaskRoutingModule } from './uptask-routing.module';
import { ListaProjectsComponent } from './lista-projects/lista-projects.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ListaTasksComponent } from './lista-tasks/lista-tasks.component';
import { FormularioTaskComponent } from './formulario-task/formulario-task.component';
import { TaskComponent } from './task/task.component';
import { FormularioProjectComponent } from './formulario-project/formulario-project.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ListaProjectsComponent,
    HeaderComponent,
    MainComponent,
    ListaTasksComponent,
    FormularioTaskComponent,
    TaskComponent,
    FormularioProjectComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UptaskRoutingModule
  ]
})
export class UptaskModule { }
