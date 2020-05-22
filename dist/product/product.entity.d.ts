import { BaseEntity } from 'typeorm';
export declare class Product extends BaseEntity {
    id: string;
    tejido: string;
    fibra: string;
    fca: number;
    clv: number;
    clave: string;
    hs: string;
    posicionArc: string;
    acab: number;
    acabado: string;
    sku: string;
    refChina: string;
    refCliente: string;
    etiqueta: string;
    ancho: string;
    peso: string;
    composition: string;
    rendimiento: number;
    unidadMedida: string;
    cantMtsFinales: number;
    cantKlsFinales: number;
    cantMtKl: number;
    capMaxKl: number;
    mt3: number;
    portOcupation: number;
}
