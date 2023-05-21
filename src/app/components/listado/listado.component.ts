import { Component } from '@angular/core';
import {DatosService} from "../../services/datos.service";
import {Pregunta} from "../../modelos/Pregunta";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  preguntas: Pregunta[] = [];

  constructor(public datosService: DatosService) {

  }
  ngOnInit(){
    this.preguntas = this.datosService.obtenerPreguntas();
  }

  agregarPregunta(pregunta: Pregunta) {
    this.preguntas.push(pregunta); // Agrega la nueva pregunta al arreglo preguntas
  }

}
