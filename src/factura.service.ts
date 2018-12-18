import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from './app/registro/vehiculo';

@Injectable()

export class FacturaService{
    url = "http://localhost:8082/factura";
    constructor(private http: HttpClient) {}
   
    registrarVehiculo(vehiculo: Vehiculo){
        return this.http.post(this.url + '/registrar_factura', vehiculo);
    }
}