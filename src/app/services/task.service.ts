import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resp } from '../interfaces/resp';
import { Task } from 'src/app/interfaces/task';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api:string=environment.api;
  project:number=0;
  tasks!:Task[];
  constructor(private http:HttpClient) { }


  listaTasks(){
    const url=`${this.api}/Task/${this.project}`;
    this.http.get<Resp>(url).subscribe(resp=>this.tasks=resp.data);
  }
  crearTask(project:number,descripcion:string){
    const url=`${this.api}/Task/create`;
    return this.http.post<Resp>(url,{project,descripcion}).pipe(
      tap(resp=>{
        if(resp.ok===true){
          this.listaTasks();
        }
      })
    );
  }
  eliminar(id:number){
    const url=`${this.api}/Task/${id}`;
    return this.http.delete<Resp>(url).pipe(
      tap(resp=>{
        if(resp.ok===true){
          this.listaTasks();
        }
      })
    );
  }
  actualizarEstado(id:number){
    const url=`${this.api}/Task/${id}`;
    return this.http.put<Resp>(url,{}).pipe(
      tap(resp=>{
        if(resp.ok===true){
          this.listaTasks();
        }
      })
    );
  }
}
