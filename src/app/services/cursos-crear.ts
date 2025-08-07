import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosCrear {
  private URL = "http://localhost:3001/cursos";
  
  constructor(private http: HttpClient){}

  guardarCurso(data:any): Observable<any>{
    return this.http.post(this.URL, data)
  }
}
