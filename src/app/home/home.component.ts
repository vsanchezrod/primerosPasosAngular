import { Component, OnInit } from '@angular/core';
// Se importa lo necesario para hacer animaciones
import { trigger, style, transition, animate, keyframes, query, stagger} from '@angular/animations';
// Se importa el servicio
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('goals', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional:true}),

        // Animación de añadir un item
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))]),{optional:true}),
        
        // Animación de eliminar un item
        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ]))]),{optional:true})
      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  public itemCount: number;
  public btnText: string = "Guardar objetivo";
  public goalText: string = "Mi primer objetivo";
  // Creo un array
  public goals: Array<string> = []

  constructor(private _data: DataService) { }

  // El código se ejecuta cuando cargue el componente
  ngOnInit() {

    // El valor del itemCount se calculará en función de la longitud del array
    this._data.goal.subscribe(res => this.goals = res);
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  // Método que añade un elemento al array cuando se hace click sobre el botón
  addItem() {
    this.goals.push(this.goalText);

    // Se limpia el input después del submit y se recalcular el valor de la longitud
    this.goalText = '';
    this.itemCount = this.goals.length;
    this._data.changeGoal(this.goals);
  }

  // Creamos un método para borrar un objetivo
  removeItem(i){
    this.goals.splice(i,1);
    this._data.changeGoal(this.goals);
  }
}
