import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable() // Esta es una clase que se puede injectar
export class DbzService{

    private _personajes: Personaje[] = [
        {nombre: 'Goku', poder: 15000},
        {nombre: 'Vegeta', poder: 8500},
    ];

    get personajes(){
        return [...this._personajes]; //// Crear nueva referencia por seguridad con el operador spread
    }

    agregarPersonaje(personaje: Personaje){
        this._personajes.push(personaje);
    }

    constructor(){}
}