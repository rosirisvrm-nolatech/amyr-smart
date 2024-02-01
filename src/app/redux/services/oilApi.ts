import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '../../config/env';

type OilConsumptionParams = {
    distance?: number;
    speed?: number;
    cost?: number;
}

type OilConsumptionResponse = {
    ['consumo_aprox TM']: number;
    ['distancia_a_recorrer NM']: number;
    ['costo$']: number;
}

type OilConsumptionDistanceResponse = {
    ['consumo_aprox TM']: number;
    ['distancia_a_recorrer NM']: number;
}

export type SumaryResponse = {
    consumo_ultimo_viaje: any;
    promedio_por_dia: any;
    distancia_recorrida: any;
    velocidad_promedio: any;
}

type OilConsumptionOilCostResponse = {
    consumo_aprox: number;
    ['costo$']: number;
    distancia_a_recorrer: number;
    velocidad_promedio_nudos: number;
}

type OilConsumptionOilCostDistanceResponse = {
    ['consumo_aprox TM']: number;
    ['distancia_a_recorrer NM']: number;
    ['costo$']: number;
}

export const oilApi = createApi({
    reducerPath: 'oilApi',
    baseQuery: fetchBaseQuery({
        baseUrl: env.AMYR_SMART_BASE_URL,
    }),
    endpoints: (builder) => ({
        getOilConsumption: builder.query<OilConsumptionResponse, OilConsumptionParams>({
            query: ({ distance, speed }) => 
                `/oil_consumption/${distance}/${speed}`,
        }),
        getOilConsumptionDistance: builder.query<OilConsumptionDistanceResponse, OilConsumptionParams>({
            query: ({ distance }) => 
                `/oil_consumption/${distance}`,
        }),
        getVenezuelaBrazil: builder.query<SumaryResponse, void>({
            query: () => 
                `/venezuela_to_brazil`,
        }),
        getBrazilVenezuela: builder.query<SumaryResponse, void>({
            query: () => 
                `/brazil_to_venezuela`,
        }),
        getOilConsumptionOilCost: builder.query<OilConsumptionOilCostResponse, OilConsumptionParams>({
            query: ({ distance, speed, cost }) => 
                `/oil_consumption/${distance}/${speed}/${cost}`,
        }),
        getOilConsumptionOilCostDistance: builder.query<OilConsumptionOilCostDistanceResponse, OilConsumptionParams>({
            query: ({ distance, cost }) => 
                `/oil_consumption/${distance}/${cost}`,
        }),
    })
})

export const { 
    useGetOilConsumptionQuery, 
    useGetOilConsumptionDistanceQuery, 
    useGetVenezuelaBrazilQuery,
    useGetBrazilVenezuelaQuery,
    useGetOilConsumptionOilCostQuery,
    useGetOilConsumptionOilCostDistanceQuery,
} = oilApi