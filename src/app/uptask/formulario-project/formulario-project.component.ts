import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-formulario-project',
  templateUrl: './formulario-project.component.html',
  styleUrls: ['./formulario-project.component.css']
})
export class FormularioProjectComponent implements OnInit {
  formulario:FormGroup=this.fb.group({
    titulo:['',[Validators.required, Validators.minLength(3)]]
  });
  constructor(private fb:FormBuilder,private projectService:ProjectService) { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('hola');
    if(!this.formulario.invalid){
      const {titulo}=this.formulario.value;
      this.projectService.crearProject(titulo).subscribe(resp=>{
        console.log(resp.ok);
      });
    }
    
  }
  
}
