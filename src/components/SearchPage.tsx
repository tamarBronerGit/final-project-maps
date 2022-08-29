import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Map from "./Map";
const  SearchPage=()=> {
    const center = useMemo(() => ({ lat: 32, lng: 35 }), [])
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: "AIzaSyATWY22XLTW2VgrhuONDfz5GT4FQJreBIs",
    });
    if (!isLoaded) return <div>isLoading...</div>
    return (
    <>
    <Map></Map>
    </>
    )
  }
  export default SearchPage;