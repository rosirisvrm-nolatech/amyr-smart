import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Coor, CoorParams, ResponseRoute, ResponseRouteWithSpeed } from '@/app/types';
import { env } from '../../config/env';

export const mapApi = createApi({
    reducerPath: 'mapApi',
    baseQuery: fetchBaseQuery({
        baseUrl: env.AMYR_SMART_BASE_URL,
    }),
    endpoints: (builder) => ({
        getCoordinates: builder.query<Coor[], CoorParams>({
            query: ({ lat_point_a, long_point_a, lat_point_b, long_point_b }) => 
                `/path/route/${lat_point_a}/${long_point_a}/${lat_point_b}/${long_point_b}`,

            transformResponse: (response: ResponseRoute, meta, arg) => response.coordinate_path,
        }),
        getCoordinatesWithSpeed: builder.query<number[][], CoorParams>({
            query: ({ lat_point_a, long_point_a, lat_point_b, long_point_b, speed }) => 
                `/path/route/${lat_point_a}/${long_point_a}/${lat_point_b}/${long_point_b}/${speed}`,

            transformResponse: (response: ResponseRouteWithSpeed, meta, arg) => response.geometry.coordinates,
        }),
    })
})

export const { useGetCoordinatesQuery } = mapApi