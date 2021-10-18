import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Resp } from '../interfaces/resp';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private api:string=environment.api;
  constructor(private http:HttpClient , private user:UserService) { }


  listaProjects(){
    const url=`${this.api}/Project/${this.user.user.id}`;

    return this.http.get<Resp>(url);
  }
  crearProject(titulo:string){
    const url=`${this.api}/Project/create`;
    return this.http.post<Resp>(url,{user:this.user.user.id,titulo});
  }
}
