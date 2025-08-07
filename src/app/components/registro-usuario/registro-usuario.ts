import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Registros } from '../../services/registros';

@Component({
  selector: 'app-registro-usuario',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.html',
  styleUrl: './registro-usuario.css'
})
export class RegistroUsuario {

  formularioRegistro: FormGroup;

  constructor(private fb: FormBuilder, private registro: Registros) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }


  agregarFormulario() {
    if (this.formularioRegistro.valid) {
      this.registro.guardarCliente(this.formularioRegistro.value).subscribe(() => {
        alert('Usuario registrado correctamente.');
        this.formularioRegistro.reset();
      });
    }
  }
}
