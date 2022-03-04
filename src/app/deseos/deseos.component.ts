import { Component, OnInit } from '@angular/core';
import { Deseo } from '../interfaces/deseo';
import { DeseosService } from '../services/deseos.service';

@Component({
  selector: 'app-deseos',
  templateUrl: './deseos.component.html',
  styleUrls: ['./deseos.component.css']
})
export class DeseosComponent implements OnInit {

  public deseos: Deseo[] = []
  constructor(private deseosService: DeseosService) {

   }

   ngOnInit(): void {
    this.deseosService.obtenerDeseos().subscribe(data => {
      this.deseos = data
      console.log(`ProductosComponent:ngOnInit:::`, this.deseos);
    })

  }
  eliminarDeseo(deseo: Deseo){
    this.deseosService.eliminarDeseos({
      id: deseo.id,
      idProducto: deseo.idProducto,
      idCliente: deseo.idCliente,
      esActivo: deseo.esActivo,
      descripcion: deseo.descripcion
    }).subscribe(data => {
      deseo.esActivo = data.esActivo
      console.log(`ProductosComponent:eliminarDeseo:::`, this.deseos);
    })
  }
  
  editarDeseo(deseo: Deseo){
    console.log(deseo);
    
    this.deseosService.modificarDeseos({
      id: deseo.id,
      idProducto: deseo.idProducto,
      idCliente: deseo.idCliente,
      esActivo: deseo.esActivo,
      descripcion: deseo.descripcion
    }).subscribe(data => {
      deseo.descripcion = data.descripcion
      console.log(`ProductosComponent:eliminarDeseo:::`, this.deseos);
    })
  }

}
