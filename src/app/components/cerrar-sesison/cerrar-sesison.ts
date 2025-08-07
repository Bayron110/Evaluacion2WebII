import { Component } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesison',
  imports: [],
  templateUrl: './cerrar-sesison.html',
  styleUrl: './cerrar-sesison.css'
})
export class CerrarSesison {
  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    this.auth.logout();               
    this.router.navigate(['/login']); 
  }

}
