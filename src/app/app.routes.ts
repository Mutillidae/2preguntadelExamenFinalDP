import { Routes } from '@angular/router';
import { Inicio } from './enlaces/inicio/inicio';
import { Formulario } from './enlaces/formulario/formulario';
import { Clientes } from './enlaces/clientes/clientes';

export const routes: Routes = [
    {path: "inicio", component: Inicio},
    {path:"clientes", component: Clientes},
    {path:"formulario", component: Formulario}
];
