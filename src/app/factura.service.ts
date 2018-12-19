import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './model/vehiculo';
import { Observable } from 'rxjs';

@Injectable()

export class FacturaService{
    url = "http://localhost:8082/factura";
    constructor(private http: HttpClient) {}
   
    registrarVehiculo(vehiculo: Vehiculo){
        return this.http.post(this.url + '/registrar_factura', vehiculo);
    }

    listarVehiculos(): Observable<Vehiculo[]>{
        return this.http.get<Vehiculo[]>(this.url + "/consultar_vehiculos_en_parqueadero")
    }

    retirarVechiculo(placa: string){
        return this.http.post(this.url + '/retirar_vehiculo', placa)
    }
}