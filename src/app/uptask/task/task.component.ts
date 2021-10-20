import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task!:Task;
  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }
  eliminar(){
    this.taskService.eliminar(this.task.id)
    .subscribe(resp=>{
      console.log(resp);
    });
  }
  actualizarEstado(){
    this.taskService.actualizarEstado(this.task.id)
    .subscribe(resp=>{
      console.log(resp);
    });
  }
} 
