import { Component } from '@angular/core';

interface Pregunta {
  texto: string;
  respuesta: string;
  esconder: boolean
}
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  preguntas: Pregunta[];


  constructor() {
    this.preguntas=[
      {
        texto: "¿Cuál es tu nombre?",
        respuesta: "Mi nombre es René",
        esconder: true
      },
      {
        texto: "¿Cuál es tu color favorito?",
        respuesta: "El azul",
        esconder: true
      },
      {
        texto: "¿Cuál es tu super héroe favorito?",
        respuesta: "Batman",
        esconder: true
      },
    ];
  }
  ngOnInit(){

  }

}
