import { Component} from '@angular/core';

import { Vehiculo } from '../model/vehiculo';
import { FacturaService } from 'src/app/factura.service';
import { AlertsService } from 'angular-alert-module';
import { ListarService } from 'src/app/listar.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent {
  
  constructor(private facturaService: FacturaService,private alerts: AlertsService, private listarService: ListarService) { }

  model = new Vehiculo('','CARRO');

  registrarVehiculo(){
    this.facturaService.registrarVehiculo(this.model).subscribe(id=>{
      this.alerts.setMessage('El vehiculo se ha registrado. No id: ' + id.toString(),'success');
    }, error=>{
      console.log(error.error.message);
      this.alerts.setMessage(error.error.message,'error');
    });
  }
}
