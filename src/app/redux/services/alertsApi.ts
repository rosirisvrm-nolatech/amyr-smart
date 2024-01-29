import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Coor, ShipPerfomanceParams, TideAlertResponse, SeaWeatherResponse } from '@/app/types';
import { env } from '../../config/env';

export const alertsApi = createApi({
    reducerPath: 'alertsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: env.AMYR_SMART_BASE_URL,
        // prepareHeaders: (headers, { getState }) => {
        //     // const token = (getState() as RootState).auth.token
        
        //     // // If we have a token set in state, let's assume that we should be passing it.
        //     // if (token) {
        //     //   headers.set('authorization', `Bearer ${token}`)
        //     // }
        //     return headers
        // },
    }),
    endpoints: (builder) => ({
        getTideAlert: builder.query<TideAlertResponse, Coor>({
            query: ({ latitude, longitude }) => 
                `/tide_alert/${latitude}/${longitude}`,

            transformResponse: (response: TideAlertResponse, meta, arg) => response,
        }),
        // getSeaLevel: builder.query<Coor, Coor>({
        //     query: ({ latitude, longitude, source }) => 
        //         `/sea_level/${latitude}/${longitude}/${source}`,

        //     transformResponse: (response: Coor, meta, arg) => response,
        // }),
        getSeaWeather: builder.query<SeaWeatherResponse, Coor>({
            query: ({ latitude, longitude }) => 
                `/sea_weather/${latitude}/${longitude}`,

            transformResponse: (response: SeaWeatherResponse, meta, arg) => response,
        }),
        // getShipPerfomance: builder.query<Coor, ShipPerfomanceParams>({
        //     query: ({ coef_resistencia, area_trans_buque, par_moto, rpm }) => 
        //         `/ship_perfomance/${coef_resistencia}/${area_trans_buque}/${par_moto}/${rpm}`,

        //     transformResponse: (response: Coor, meta, arg) => response,
        // }),
        // getShipSpeed: builder.query<Coor, ShipPerfomanceParams>({
        //     query: ({ speed, tide, wind }) => 
        //         `/ship_speed/${speed}/${tide}/${wind}`,

        //     transformResponse: (response: Coor, meta, arg) => response,
        // }),
        // getShipFuelConsumption: builder.query<Coor, ShipPerfomanceParams>({
        //     query: ({ distance, fuel_efficiency, wind_velocity }) => 
        //         `/ship_fuel_consumption/${distance}/${fuel_efficiency}/${wind_velocity}/`,

        //     transformResponse: (response: Coor, meta, arg) => response,
        // }),
        // getShipEfficiency: builder.query<Coor, ShipPerfomanceParams>({
        //     query: ({ distance, fuel_consumed }) => 
        //         `/ship_efficiency/${distance}/${fuel_consumed}`,

        //     transformResponse: (response: Coor, meta, arg) => response,
        // }),
    })
})

export const { 
    useGetTideAlertQuery,
    // useGetSeaLevelQuery,
    useGetSeaWeatherQuery,
    // useGetShipPerfomanceQuery,
    // useGetShipSpeedQuery,
    // useGetShipFuelConsumptionQuery,
    // useGetShipEfficiencyQuery
 } = alertsApi

