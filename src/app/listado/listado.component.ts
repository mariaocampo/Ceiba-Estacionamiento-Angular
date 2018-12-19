import { Component, OnInit} from '@angular/core';
import { Vehiculo } from '../model/vehiculo';
import { FacturaService } from 'src/app/factura.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})

export class ListadoComponent implements OnInit {

  vehiculos: Vehiculo[];
  columnas = ['ID', 'Placa', 'Tipo Vehiculo', 'Cilindraje', 'Fecha Ingreso',''];
  factura: any;

  constructor(private facturaService: FacturaService, private alerts: AlertsService) { }
  
  ngOnInit(){
    this.alerts.setDefaults('timeout',15);
    this.listarVehiculos();
  }

  listarVehiculos(){
      this.facturaService.listarVehiculos().subscribe(lista=>{
        console.log(lista);
        this.vehiculos = lista
      })
  }

  facturar(placa: string){
    this.facturaService.retirarVechiculo(placa).subscribe(factura=>{
      this.factura = factura;
      console.log(this.factura.precio);
      this.alerts.setMessage('El valor a pagar por el vehiculo es: $' + this.factura.precio,'warn');
      this.listarVehiculos();
    });
  }
}
