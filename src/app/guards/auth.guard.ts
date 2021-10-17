import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private userService:UserService,
    private router:Router ){}


  canActivate(): Observable<boolean >| boolean {
    return this.userService.validarToken()
      .pipe(
        tap(valid=>{
          if(!valid){
            console.log('canload');
            //Swal.fire('Error','su sesion ha expirado','error');
            this.router.navigateByUrl('/');
          }
        })
      );
  }
  canLoad(): Observable<boolean > | boolean  {
    return this.userService.validarToken()
      .pipe(
        tap((valid)=>{
          console.log('canload');
          if(!valid){
           // Swal.fire('Error','su sesion ha expirado','error');
            console.log('canload');
            this.router.navigateByUrl('');
          }
        })
      );
  }
}
