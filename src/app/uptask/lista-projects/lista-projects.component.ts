import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-projects',
  templateUrl: './lista-projects.component.html',
  styleUrls: ['./lista-projects.component.css']
})
export class ListaProjectsComponent implements OnInit {
  agregar:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  agregarProyecto(){}
}
