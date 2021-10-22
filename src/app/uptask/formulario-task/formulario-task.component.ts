import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import Swal from 'sweetalert2';
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
    if(!this.formulario.invalid){
      const {descripcion}=this.formulario.value;
      this.taskService.crearTask(descripcion).subscribe(resp=>{
        if(resp.ok===true){
          Swal.fire(
            'Registrada',
            'Tarea registrada existosamente',
            'success'
          );
         
        }else{
          Swal.fire('Error',resp.msg,'error');
        }

      });
    }
  }
}
