import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resp } from '../interfaces/resp';
import { User } from '../interfaces/user';
import {catchError, map, tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private api:string=environment.api;
  private _user!:User;
  get user():User{
    return {...this._user};
  }
  constructor(private http:HttpClient) { }
  login(email:string, password:string){
    const url=`${this.api}/User/login`;
    const body={email,password};
    return this.http.post<Resp>(url, body).pipe(
      tap(resp=>{

        if(resp.ok===true){
          localStorage.setItem('token',resp.token!);
                this._user=resp.data
                  
                

          
        }
      }),
     
      catchError(err=>of(err.error.msg))
    );
  }
  register(email:string, password:string,username:string){
    const url=`${this.api}/User/registro`;
    const body={email,password,username};
    return this.http.post<Resp>(url, body).pipe(
      tap(resp=>{

        if(resp.ok===true){
          localStorage.setItem('token',resp.token!);
                this._user={
                  username:resp.data.username,
                  email:resp.data.correo,
                  id:resp.data.id,  
                  password:resp.data.password
                }
          
        }
      }),
     
      catchError(err=>of(err.error.msg))
    );
  }
  validarToken(){
    const url=`${this.api}/User/renew`;
    const headers =new HttpHeaders()
      .set('x-token',localStorage.getItem('token') || '');
    return this.http.get<Resp>(url,{headers})
            .pipe(
              map(resp=>{
                localStorage.setItem('token',resp.token!);
                this._user=resp.data
                    
                
                
                return resp.ok;
              }),
              catchError(err=>of(false))
            );
  }
  logout(){
    localStorage.clear();
  }


}


