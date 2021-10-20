import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/task';
import { ProjectService } from 'src/app/services/project.service';
@Component({
  selector: 'app-lista-tasks',
  templateUrl: './lista-tasks.component.html',
  styleUrls: ['./lista-tasks.component.css']
})
export class ListaTasksComponent implements OnInit {
 
  constructor(private projectService:ProjectService, private taskService: TaskService,private route: ActivatedRoute) { }
  get tasks():Task[] { 
    return this.taskService.tasks;
  }

  get project():string{
    
    const project=this.projectService.projects.find(p=>p.id==this.taskService.project);
    
    return  project?.titulo || '';
  }
  ngOnInit(): void {
    

    this.route.params.subscribe(({ id }) =>{
        this.taskService.project=id;
        return this.taskService.listaTasks();
      });
  }

}
