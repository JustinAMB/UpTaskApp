import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resp } from '../interfaces/resp';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private api:string=environment.api;
  constructor(private http:HttpClient) { }


  listaTasks(project:number){
    const url=`${this.api}/Task/${project}`;

    return this.http.get<Resp>(url);
  }
  crearTask(project:number,descripcion:string){
    const url=`${this.api}/Task/create`;
    return this.http.post<Resp>(url,{project,descripcion});
  }
}
