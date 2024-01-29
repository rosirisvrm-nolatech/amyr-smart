import React from "react";
import dynamic from "next/dynamic";
const MapChart = dynamic(() => import('./MapChart'), {
  ssr: false,
})
import { Box } from "@mui/material";
import Loading from "../shared/Loading";
import { useGetCoordinatesQuery } from "@/app/redux/services/mapApi";
// import { useGetSeaWeatherQuery } from "@/app/redux/services/alertsApi";

const initialsCoor = {
  lat_point_a: 11.7833302, 
  long_point_a: -70.2333324, 
  lat_point_b: -1.455833, 
  long_point_b: -48.503887, 
  // speed: 35,
}

const Map = () => {
  const { data, isLoading } = useGetCoordinatesQuery(initialsCoor)
  // console.log('data: ', data);  

  // const { data: dataAlert, isLoading: loadingAlert } = useGetSeaWeatherQuery({ 
  //   latitude: initialsCoor.lat_point_a,
  //   longitude: initialsCoor.long_point_a,
  // })
  // console.log('dataAlert :', dataAlert);

  return (
    <Box className="rounded-bars">
      {/* {loadingAlert && <p>Loading...</p>}
      {dataAlert && dataAlert.hours.length > 0 && dataAlert.hours.map((a: any) => <p key={a.time}>{a.time}</p>)} */}
      {isLoading ? 
        <Loading /> :
        <MapChart data={data ? data : []} />
      }
    </Box>
  );
};

export default Map;
