import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CursosCrear } from '../../services/cursos-crear';
import { CursosTPipe } from '../../pipes/cursos-t-pipe';

@Component({
  selector: 'app-crear-cursos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CursosTPipe],
  templateUrl: './crear-cursos.html',
  styleUrl: './crear-cursos.css'
})
export class CrearCursos {
  formularioCurso: FormGroup;

  enviado: boolean = false;

  constructor(private fb: FormBuilder, private cursos: CursosCrear) {
    this.formularioCurso = this.fb.group({
      nombre: ['', Validators.required],
      paralelo: ['', Validators.required],
      perido: ['', Validators.required],
      docente: ['', Validators.required],
      tipo: ['', Validators.required],
      materia: ['', Validators.required],
    });
  }

  agregarCurso() {
    if (this.formularioCurso.valid) {
      this.cursos.guardarCurso(this.formularioCurso.value).subscribe(() => {
        alert('Curso creado correctamente.');
        this.formularioCurso.reset();
      });
    } else {
      this.formularioCurso.markAllAsTouched();
    }
  }
  camposSinLlenar = (): boolean => {
    const valores = this.formularioCurso.value;
    return Object.values(valores).some(valor =>
      typeof valor === 'string' ? valor.trim() === '' : valor === null || valor === undefined
    );
  };

}