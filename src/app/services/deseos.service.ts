import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Deseo } from '../interfaces/deseo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  private url = 'http://localhost:3001/deseos';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Deseo[]>{
    return this.http.get<Deseo[]>(this.url).pipe(map((data: any) => data.data))
  }
}
