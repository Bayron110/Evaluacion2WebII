import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'horasPipe',
  standalone: true
})
export class HorasPipe implements PipeTransform {
  transform(valor: string): string {
    const minutos = parseInt(valor, 10);

    if (isNaN(minutos) || minutos < 0) return 'Duración inválida';

    const horas = Math.floor(minutos / 60);
    const resto = minutos % 60;

    if (horas > 0 && resto > 0) {
      return `${horas} hora${horas > 1 ? 's' : ''} y ${resto} minuto${resto > 1 ? 's' : ''}`;
    } else if (horas > 0) {
      return `${horas} hora${horas > 1 ? 's' : ''}`;
    } else {
      return `${resto} minuto${resto > 1 ? 's' : ''}`;
    }
  }
}