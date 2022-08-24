import { useEffect, useMemo } from "react";
import{GoogleMap,useLoadScript,Marker}from "@react-google-maps/api";
import { ChangeEvent } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShowMap(){
    const center=useMemo(()=>({lat:32,lng:35}),[])
    const{isLoaded}=useLoadScript({
     googleMapsApiKey:"AIzaSyATWY22XLTW2VgrhuONDfz5GT4FQJreBIs",
    });
    if(!isLoaded) return<div>isLoading...</div>
    return (
        <Item >
            <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
                <Marker position={center}></Marker>
            </GoogleMap>
        </Item>
    )   
}

function AppAuto() {

    const center = { lat: 50.064192, lng: -130.605469 };
    // Create a bounding box with sides ~10km away from the center point
    const defaultBounds = {
        north: center.lat + 0.1,
        south: center.lat - 0.1,
        east: center.lng + 0.1,
        west: center.lng - 0.1,
    };
    useEffect(() => {
        const input = document.getElementById("searchTextField") as HTMLInputElement;
        const options = {
            bounds: defaultBounds,
            componentRestrictions: { country: "us" },
            fields: ["address_components", "geometry", "icon", "name"],
            strictBounds: false,
            types: ["establishment"],
        };
        const autocomplete = new window.google.maps.places.Autocomplete(input, options);
        autocomplete.setFields(["place_id", "geometry", "name"]);
    },[]);
   
 return (<input id="searchTextField" type="text" ></input>)

}

function SearchScreen() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={20} md={8}>
            <div>
                <h1>Try ***</h1>
            </div>
        </Grid>
        <Grid item xs={60} md={8}>
            <ShowMap/>
        </Grid>
        <Grid item xs={60} md={4}>
            <AppAuto/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchScreen