import { BaseEntity } from 'typeorm';
export declare class Product extends BaseEntity {
    id: string;
    fabric: string;
    fibre: string;
    fca: number;
    clv: number;
    key: string;
    hs: string;
    positionArc: string;
    acab: number;
    acabado: string;
    sku: string;
    refChina: string;
    refClient: string;
    label: string;
    wide: string;
    weight: string;
    composition: string;
    perfomance: number;
    unitMeasure: string;
    cantMtsFinals: number;
    cantKlsFinals: number;
    cantMtKl: number;
    capMaxKl: number;
    mt3: number;
    portOcupation: number;
}
