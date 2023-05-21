import {Component, EventEmitter, Output} from '@angular/core';
import { Pregunta } from "../../modelos/Pregunta";

@Component({
  selector: 'app-agregar-pregunta',
  templateUrl: './agregar-pregunta.component.html',
  styleUrls: ['./agregar-pregunta.component.css']
})
export class AgregarPreguntaComponent {
  @Output() preguntaAgregada = new EventEmitter<Pregunta>();

  pregunta: string = '';
  respuesta: string = '';
  agregarPregunta(event: Event) {
    event.preventDefault(); // Evita la recarga de la página al enviar el formulario

    const nuevaPregunta: Pregunta = {
      texto: this.pregunta,
      respuesta: this.respuesta,
      esconder: true
    };
    this.preguntaAgregada.emit(nuevaPregunta);
  }

}
