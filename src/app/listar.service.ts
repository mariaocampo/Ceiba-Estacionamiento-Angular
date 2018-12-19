import { Injectable } from '@angular/core';
import { Vehiculo } from './model/vehiculo';
import { FacturaService } from 'src/app/factura.service'

@Injectable({
  providedIn: 'root'
})
export class ListarService {
  vehiculos: Vehiculo[];

  constructor(private facturaService: FacturaService) { }

  listarVehiculos = ()=>{
    this.facturaService.listarVehiculos().subscribe(lista=>{
      this.vehiculos = lista
    })
  }
}
