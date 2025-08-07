import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { RegistroUsuario } from './components/registro-usuario/registro-usuario';
import { Login } from './components/login/login';
import { AuthGuardGuard } from './guards/auth-guard-guard';

import { CrearCursos } from './components/crear-cursos/crear-cursos';
import { CerrarSesison } from './components/cerrar-sesison/cerrar-sesison';
import { CursosComponent } from './components/cursos/cursos';

export const routes: Routes = [

    { path: "home", component: Home },
    { path: "registro", component: RegistroUsuario },
    { path: "login", component: Login },

    {
        path: "",
        canActivateChild: [AuthGuardGuard],
        children: [
            { path: "curso", component: CursosComponent },
            { path: "Crear", component: CrearCursos },
            {path:"Cerrar", component:CerrarSesison}
        ]
    },
    { path: "", redirectTo: "/home", pathMatch: "full" }

];
