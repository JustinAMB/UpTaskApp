import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resp } from '../interfaces/resp';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private api:string=environment.api;
  constructor(private http:HttpClient) { }


  listaTasks(user:number){
    const url=`${this.api}/Project/${user}`;

    return this.http.get<Resp>(url);
  }
  crearTask(user:number,titulo:string){
    const url=`${this.api}/Task/create`;
    return this.http.post<Resp>(url,{user,titulo});
  }
}
