import { Component } from '@angular/core';

@Component({
    selector: 'videojuegos',
    templateUrl: './videojuego.component.html'
})

export class VideojuegosComponent {
    public nombre = 'videojuegos';
    public mejor_juego = 'GTA 5';
    public descripcion = 'Juego de pc';
    public mejor_juego_retro = 'Super Mario';
    public mostrar_retro = true;
    public color = 'gray';

    public videojuegos = [
        'Los simpsons',
        'Call of Duty',
        'Tekken',
        'GTA 5',
        'Pacman'
    ]
}