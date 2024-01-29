'use client'
import { MapContainer, TileLayer, CircleMarker, Popup, Marker, Polyline } from 'react-leaflet';
// import { polyline } from './coordinates';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

const limeOptions = { color: 'lime' }

type Coor = {
    latitude: number;
    longitude: number;
}

type Coordinates = {
    lat: number;
    lng: number;
}

type Props = {
    data: Coor[] | undefined;
}

const MapChart = ({ data = [] }: Props) => {

    const initialState: Coordinates[] = []
    const [dataFormated, setDataFormated] = useState(initialState)

    const formatData = () => {
        if(data?.length > 0){
            const format = data.map(coor => ({
                lat: coor?.latitude,
                lng: coor?.longitude,
            }))
            setDataFormated(format)
        }
    }

    useEffect(() => {
        formatData()
    }, [data])
    

    return(
        <MapContainer className="map" center={{ lat: 10, lng: -59.3587 }} zoom={5} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* <Marker position={{ lat: 11.7833302, lng: -70.2333324 }}>
                <Popup>
                    Current location
                </Popup>
            </Marker> */}

            {/* <Polyline pathOptions={limeOptions} positions={polyline} />

            {polyline.map((coor, index) => (
                <CircleMarker key={index} center={{ lat: coor.lat, lng: coor.lng }} 
                    radius={2} fillColor='blue' fill color='blue' opacity={10}
                >
                    <Popup>
                        <p>Lat: {coor.lat}</p>
                        <p>Lng: {coor.lng}</p>
                    </Popup>
                </CircleMarker>
            ))}  */}

            <Polyline pathOptions={limeOptions} positions={dataFormated} />

            {dataFormated.map((coor, index) => (
                <CircleMarker key={index} center={coor} radius={2} fillColor='blue' fill color='blue' opacity={10}>
                    <Popup>
                        <p>Lat: {coor.lat}</p>
                        <p>Lng: {coor.lng}</p>
                    </Popup>
                </CircleMarker>
            ))} 
        </MapContainer>
    )
}

export default MapChart;