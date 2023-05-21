import {Component, Input} from '@angular/core';
import {Pregunta} from "../../modelos/Pregunta";
import {DatosService} from "../../services/datos.service";

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})


export class PreguntaComponent {
  @Input('pregunta') pregunta: Pregunta = {} as Pregunta;

  constructor(public datosService:DatosService) {
  }

  borrarPregunta(){
    this.datosService.borrarPregunta(this.pregunta);
  }

}
