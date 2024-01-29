import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '../../config/env';

type OilConsumptionParams = {
    distance?: number;
    speed?: number;
}

type OilConsumptionResponse = {
    consumo_aprox: number;
    distancia_a_recorrer: number;
    velocidad_promedio_nudos: number;
}

type OilConsumptionDistanceResponse = {
    ['consumo_aprox TM']: number;
    distancia_a_recorrer: number;
}

type SumaryResponse = {
    consumo_ultimo_viaje: number,
    promedio_por_dia: number,
    distancia_recorrida: number,
    velocidad_promedio: number
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
    })
})

export const { 
    useGetOilConsumptionQuery, 
    useGetOilConsumptionDistanceQuery, 
    useGetVenezuelaBrazilQuery,
    useGetBrazilVenezuelaQuery
    
} = oilApi