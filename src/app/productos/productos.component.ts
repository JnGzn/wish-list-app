import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductosService } from '../services/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public productos: Producto[] = []
  constructor( private productoService: ProductosService) { 
    // productoService = new ProductosService()
  }

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(data => {
      this.productos = data
      console.log(`ProductosComponent:ngOnInit:::`, this.productos);
    })
  }

  async agregarLista(producto: Producto){
    console.log(producto);
    Swal.fire({
      title: 'Por favor confirme'
    })
    const val = await Swal.getInput()
    
    if (val) {
      Swal.fire(`Entered password: ${val}`)
    }
  }

}
