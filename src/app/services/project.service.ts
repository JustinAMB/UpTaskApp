import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Project } from '../interfaces/project';
import { Resp } from '../interfaces/resp';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private api:string=environment.api;
  constructor(private http:HttpClient , private user:UserService) { }
  projects:Project[]=[];
  agregar:boolean=false;
  listaProjects(){
    const url=`${this.api}/Project/${this.user.user.id}`;
    this.http.get<Resp>(url).subscribe(resp=>{
      console.log(resp);
      this.projects=resp.data
    });
  }
  crearProject(titulo:string){
    const url=`${this.api}/Project/create`;
    return this.http.post<Resp>(url,{user:this.user.user.id,titulo}).pipe(
      tap(resp=>{
        if(resp.ok===true){
          this.listaProjects();
        }
      })
    );
  }
}
