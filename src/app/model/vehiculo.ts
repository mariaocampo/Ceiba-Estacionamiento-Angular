export class Vehiculo{
    constructor(
        public placa: string,
        public tipoVehiculo: string,
        public cilindraje?: number,
        public fechaIngreso?: Date,
        public id?: number
    ){}
}