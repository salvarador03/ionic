import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  cerrarSesion()
  {
    // TODO: IMPLEMENTAR LÓGICA
  }
  isSesionIniciada(): Observable<boolean>
  {
    var sesionIniciada: any; // Implementar lógica
    return of(sesionIniciada);
  }

  constructor() { }
}
