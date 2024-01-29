// Request Params

type CoorParams = {
    lat_point_a?: number,
    long_point_a?: number,
    lat_point_b?: number,
    long_point_b?: number,
    speed?: number,
}

type Coor = {
    latitude: number;
    longitude: number;
    source?: number;
}

// Request Responses

type ResponseRoute = { 
    path: number[]; 
    length: number;
    coordinate_path: Coor[]
}

type ResponseRouteWithSpeed = { 
    type: string; 
    properties: object;
    geometry: {
        type: string;
        coordinates: number[][];
    }, 
}

export type {
    CoorParams,
    Coor,
    ResponseRoute,
    ResponseRouteWithSpeed
};