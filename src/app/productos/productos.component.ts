import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2'
import { DeseosService } from '../services/deseos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Producto[] = []
  constructor( private productoService: ProductosService, private deseoService: DeseosService) { 
    // productoService = new ProductosService()
  }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data
      console.log(`ProductosComponent:ngOnInit:::`, this.productos);
    })
  }

  async agregarLista(producto: Producto){
    const descripcion = ''
  
    this.deseoService.agregarDeseo({
      idProducto: producto.id,
      idCliente:'1',
      descripcion
    }).subscribe(data => {
      console.log(data);
    })
    
  }

}
