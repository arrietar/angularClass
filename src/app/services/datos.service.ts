import { Injectable } from '@angular/core';
import {Pregunta} from "../modelos/Pregunta";

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  preguntas: Pregunta[] = [];
  constructor() {
    /*
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

     */
  }
  obtenerPreguntas(): Pregunta[]{
    return this.preguntas;
  }

  borrarPregunta(pregunta:Pregunta){
    for(let i = 0; i < this.preguntas.length; i++){
      if(pregunta == this.preguntas[i]){
        this.preguntas.splice(i, 1);
      }
    }
  }
}
