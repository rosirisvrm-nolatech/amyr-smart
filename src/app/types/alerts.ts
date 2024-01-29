// Request Params

type ShipPerfomanceParams = {
    coef_resistencia?: number; 
    area_trans_buque?: number; 
    par_moto?: number; 
    rpm?: number;
    speed: number; 
    tide: number; 
    wind: number;
    distance?: number;
    fuel_efficiency?: number;
    wind_velocity?: number;
    fuel_consumed?: number;
}

// Request Responses

type TideAlertData = {
    height: number;
    time: string;
    type: string;
}

type TideAlertResponse = {
    data: TideAlertData[]
    meta?: object;
}

type Hours = {
    airTemperature: {
        noaa: number,
        sg: number,
    },
    seaLevel: {
        meto: number,
        sg: number
    },
    time: string,
    waveHeight: {
        icon: number,
        meteo: number,
        noaa: number,
        sg: number
    },
    windSpeed30m: {
        noaa: number,
        sg: number
    }
}

type SeaWeatherResponse = {
    hours: Hours[]
    meta?: object;
}


export type { 
    ShipPerfomanceParams, 
    TideAlertData,
    TideAlertResponse,
    Hours,
    SeaWeatherResponse
};