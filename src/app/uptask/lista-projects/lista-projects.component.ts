import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { ProjectService } from 'src/app/services/project.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista-projects',
  templateUrl: './lista-projects.component.html',
  styleUrls: ['./lista-projects.component.css']
})
export class ListaProjectsComponent implements OnInit {
  
  constructor(private projectService: ProjectService) { }
  get projects() :Project[] {
    return this.projectService.projects;
  }
  get agregar() :boolean{
    return this.projectService.agregar;
  }
  ngOnInit(): void {
    this.projectService.listaProjects(); 
  }
  agregarProyecto(){
    this.projectService.agregar=true;
  }
  crearProyecto(){
    
  }
 
}
