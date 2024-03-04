import { Respuesta } from "./respuesta";

export class pregunta{
    descripcionPregunta: string;
    respuestas: Respuesta[];

    constructor(descripcionPregunta: string, respuestas: Respuesta[]){
        this.descripcionPregunta = descripcionPregunta;
        this.respuestas = respuestas;
    }
}