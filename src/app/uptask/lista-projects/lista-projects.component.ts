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
  agregar:boolean=false;
  constructor(private projectService: ProjectService) { }
  projects: Project[] = [];
  ngOnInit(): void {
    this.projectService.listaProjects()
    .subscribe(resp=>{
      this.projects=resp.data;
    });
  }
  agregarProyecto(){
    this.agregar=true;
  }
  crearProyecto(){
    
  }
 
}
