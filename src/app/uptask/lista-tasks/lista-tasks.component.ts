import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/task';
@Component({
  selector: 'app-lista-tasks',
  templateUrl: './lista-tasks.component.html',
  styleUrls: ['./lista-tasks.component.css']
})
export class ListaTasksComponent implements OnInit {
 
  constructor(private taskService: TaskService,private route: ActivatedRoute) { }
  get tasks():Task[] { 
    return this.taskService.tasks;
  }
  ngOnInit(): void {
    

    this.route.params.subscribe(({ id }) =>{
        this.taskService.project=id;
        return this.taskService.listaTasks();
      });
  }

}
