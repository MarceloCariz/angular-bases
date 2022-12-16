import { Component } from '@angular/core';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // get personajes():Personaje[]{
  //   return this.dbzService.personajes
  // }

  // agregarNuevoPersonaje(argumento : Personaje){
  //   this.personajes.push(argumento);
  // }

  constructor(){ // Inyeccion de dependencias ,, Todos los hijos reciben la info , es como context

  }
}
