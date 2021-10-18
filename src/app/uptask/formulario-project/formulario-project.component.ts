import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-project',
  templateUrl: './formulario-project.component.html',
  styleUrls: ['./formulario-project.component.css']
})
export class FormularioProjectComponent implements OnInit {
  formulario:FormGroup=this.fb.group({
    titulo:['',[Validators.required, Validators.minLength(3)]]
  });
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
}
