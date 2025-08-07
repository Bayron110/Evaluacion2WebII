import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  formLogin: FormGroup;
  errorLogin: boolean = false;
  cargando: boolean = false;

  constructor(
    private fb: FormBuilder,
    private auth: Auth,
    private router: Router
  ) {
    this.formLogin = this.fb.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  enviarLogin() {
    if (this.formLogin.invalid) return;

    const { nombre, contrasena } = this.formLogin.value;

    this.cargando = true;
    this.auth.login(nombre, contrasena).subscribe(ok => {
      this.cargando = false;
      if (ok) {
        this.router.navigate(['/home']);
      } else {
        this.errorLogin = true;
      }
    });
  }

}
