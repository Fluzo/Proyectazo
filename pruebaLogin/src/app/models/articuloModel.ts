export class ArticuloModel{

    iD_ARTICULO: any;
    nombre: any;
    alto: any;
    ancho: any;
    largo: any;
    peso: any;
    descripcion: any;
    fabricante: any;
    precio: any;
    activo: boolean;

    constructor() {
        this.activo = true;
    }
}