import { Component, OnInit, Injectable } from '@angular/core';
import { PreguntaService } from '../../services/pregunta.service';
import { pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  listPregunta: pregunta[];
  constructor(public preguntaService: PreguntaService) { }

  ngOnInit(): void {
    this.listPregunta = this.preguntaService.getPreguntas();
  }

  obtenerPregunta(){
    return this.listPregunta[this.preguntaService.indexPregunta].descripcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexRta: number){
    if(this.preguntaService.pregConfirmada === true){
      return;
    }
    this.preguntaService.opcionSeleccionada = respuesta;
    this.preguntaService.deshabilitarBtn = false;
    this.preguntaService.indexRespuesta = indexRta;
  }

  AddClassOption(respuesta: Respuesta): string{
    // respuesta seleccionada no esta confirmada
    if(respuesta === this.preguntaService.opcionSeleccionada && !this.preguntaService.pregConfirmada){
      return 'active text-light';
    }

    //respuesta correcta y confirmada
    if(respuesta === this.preguntaService.opcionSeleccionada
    && this.preguntaService.pregConfirmada 
    && this.preguntaService.opcionSeleccionada.esCorrecta === 1){
      return 'list-group-item-success'
    }

    //respuesta correcta y confirmada
    if(respuesta === this.preguntaService.opcionSeleccionada
    && this.preguntaService.pregConfirmada 
    && this.preguntaService.opcionSeleccionada.esCorrecta === 0){
      return 'list-group-item-danger'
    }
    return '';
  }

  iconCorrecta(respuesta: Respuesta){
    if(respuesta === this.preguntaService.opcionSeleccionada
    && this.preguntaService.pregConfirmada 
    && this.preguntaService.opcionSeleccionada.esCorrecta === 1){
      return true;
    }else{
      return false;
    }
  }
  iconIncorrecta(respuesta: Respuesta){
    if(respuesta === this.preguntaService.opcionSeleccionada
    && this.preguntaService.pregConfirmada 
    && this.preguntaService.opcionSeleccionada.esCorrecta === 0){
      return true;
    }else{
      return false;
    }
  }
}