import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario:FormGroup=this.fb.group({
    
    email:['',[Validators.required]],
    password:['',[Validators.required]]
  });
  constructor(private router: Router,private userService: UserService,private fb:FormBuilder) { }


  ngOnInit(): void {
  }

}
