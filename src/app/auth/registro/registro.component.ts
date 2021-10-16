import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  formulario:FormGroup=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });
  constructor(private router: Router,private userService: UserService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
    const{username,email,password}=this.formulario.value;
    this.userService.register(email,password,username)
      .subscribe((ok)=>{
        
        if(ok===true){
          console.log(this.formulario.value);
         // this.router.navigateByUrl('/dashboard');
        }else{
          console.log(ok);
          //Swal.fire('Error',ok,'error');
        }
      });
    console.log(this.formulario.value)
  }
}
