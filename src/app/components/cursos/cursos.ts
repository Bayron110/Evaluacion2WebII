import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Cursos } from '../../../interface/Cursos';


@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class CursosComponent implements OnInit {

  cursos: Cursos[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<{ cursos: Cursos[] }>('assets/cursos.json')
      .subscribe({
        next: (data) => this.cursos = data.cursos,
        error: (error) => console.error('Error al cargar cursos:', error)
      });
  }
}