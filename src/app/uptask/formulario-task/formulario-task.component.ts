import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-formulario-task',
  templateUrl: './formulario-task.component.html',
  styleUrls: ['./formulario-task.component.css']
})
export class FormularioTaskComponent implements OnInit {
  formulario:FormGroup=this.fb.group({
    descripcion:['',[Validators.required, Validators.minLength(3)]]
  });
  constructor(private fb:FormBuilder,private taskService:TaskService) { }


  ngOnInit(): void {
  }
  crearTarea(){
    
  }
}
