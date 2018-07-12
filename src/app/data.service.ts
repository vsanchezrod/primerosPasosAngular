import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//Se importa la librería BehaviorSubject para poder compartir datos entre los componentes

// Los servicios usan el decorador @Injectable
@Injectable({
  providedIn: 'root'
})

export class DataService {

  // Creo una propiedad privada
  private goals = new BehaviorSubject<any>(['Objetivo inicial', 'Otro objetivo']);

  goal = this.goals.asObservable();

  constructor() { }

  // Método
  changeGoal(goal) {
    this.goals.next(goal);
  }

}
