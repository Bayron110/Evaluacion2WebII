import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cursosT'
})
export class CursosTPipe implements PipeTransform {

  transform(nombre: string): string {
    return `Datos del Curso Generado: ${nombre.toUpperCase()}`;
  }



}
