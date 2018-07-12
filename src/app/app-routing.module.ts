import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Se importa los componentes creados
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Es donde voy a setear las rutas a los componentes
const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about/:id',
        component: AboutComponent
    }
];

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }