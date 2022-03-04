import { Producto } from './producto';
export interface Deseo {
    id: string,
    idProducto: string,
    idCliente: string,
    esActivo: string,
    descripcion: string,
    producto: Producto
}
