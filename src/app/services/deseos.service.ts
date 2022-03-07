import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Deseo } from '../interfaces/deseo';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  private url = 'http://localhost:3001/deseo';

  constructor(private http: HttpClient) { }

  obtenerDeseos(): Observable<Deseo[]>{
    return this.http.get<Deseo[]>(this.url).pipe(map((data: any) => data.data))
  }
  eliminarDeseos(deseo: any): Observable<Deseo>{
    return this.http.delete<Deseo>(this.url, {body: deseo}).pipe(map((data: any) => data.data))
  }
  modificarDeseos(deseo: any): Observable<Deseo>{
    return this.http.put<Deseo>(this.url,deseo).pipe(map((data: any) => data.data))
  }
  agregarDeseo(deseo: any){
    return this.http.post<Deseo>(this.url,deseo).pipe(map((data: any) => data.data))
  }
}
