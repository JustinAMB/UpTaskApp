import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/interfaces/task';
@Component({
  selector: 'app-lista-tasks',
  templateUrl: './lista-tasks.component.html',
  styleUrls: ['./lista-tasks.component.css']
})
export class ListaTasksComponent implements OnInit {
  tasks:Task[]=[];
  constructor(private taskService: TaskService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    

    this.route.params
      .pipe(
          switchMap(({ id }) => this.taskService.listaTasks(id))
      )
      .subscribe((resp) => this.tasks = resp.data);
  }

}
