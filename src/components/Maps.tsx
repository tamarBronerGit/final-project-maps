import { useMemo } from "react";
import{GoogleMap,useLoadScript,Marker}from "@react-google-maps/api";
export default function Maps(){
    const center=useMemo(()=>({lat:32,lng:35}),[])
    const{isLoaded}=useLoadScript({
     googleMapsApiKey:"AIzaSyATWY22XLTW2VgrhuONDfz5GT4FQJreBIs",
    });
    if(!isLoaded) return<div>isLoading...</div>
    return <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer"
    >
<Marker position={center}></Marker>
    </GoogleMap>
}