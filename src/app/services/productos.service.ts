import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url = 'http://localhost:3001/productos';

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url).pipe(map((data: any) => data.data))
  }
}
