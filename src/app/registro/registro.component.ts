import { Component} from '@angular/core';

import { Vehiculo } from './vehiculo';
import { FacturaService } from 'src/factura.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})


export class RegistroComponent {
  
  constructor(private facturaService: FacturaService) { }

  model = new Vehiculo('','CARRO');
  
  registrarVehiculo(){
    this.facturaService.registrarVehiculo(this.model).subscribe(x=>{
      console.log(x)
    });
  }
}
