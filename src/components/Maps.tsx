import { useEffect, useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { ChangeEvent } from "react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
<<<<<<< HEAD
  
  const PlacesAutocomplete = () => {
    const {ready,value,suggestions: { status, data },setValue,clearSuggestions,} = usePlacesAutocomplete({
      requestOptions: {
        /* Define search scope here */
      },
      debounce: 300,
    });
    const ref = useOnclickOutside(() => {
      // When user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e:any) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  
    const handleSelect =( description:any ) =>() => {
=======
import { type } from "@testing-library/user-event/dist/type";
// const values = ["Google, Breithaupt Street, Kitchener, ON, Canada", "Isabella", "Brasov", "Prosperity", "Jerusalem"];
// type PlaceProps = {
//     setOffice: (position: google.maps.LatLngLiteral) => void;
// }
const PlacesAutocomplete = () => {
  const { ready, value, suggestions: { status, data }, setValue, clearSuggestions, } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e: any) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };
  // type googleleLatLng = google.maps.LatLng;
  // type GoogleMap = google.maps.Map;
  // interface IMarker {
  //   address: string;
  //   latitude: number;
  //   longitude: number;
  // }
  const handleSelect =
    (description: any) =>
      () => {
        // const [marker, setMarker] = useState<IMarker>();

>>>>>>> d184bacffaf27c1a847b70f54dfc9764e6e9d0de
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
        // const initEventListener = (): void => {
        //   if (Map) {
        //     google.maps.event.addListener(Map, 'click', function (e) {
        //       console.log(e)
        //       CordinateToAddress(e.latlng)
        //     });
        //   }
        // };
        // useEffect(initEventListener, [Map]);
        // const CordinateToAddress=(cordinate:googleleLatLng)=>{

        // };

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
          .then((results) => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            console.log("📍 Coordinates: ", { lat, lng });
          })
          .catch((error) => {
            console.log("😱 Error: ", error);
          });
      };
<<<<<<< HEAD
      useEffect(() => {
                 const input = document.getElementById("searchTextField") as HTMLInputElement;
                 const options = {
                    //  bounds: defaultBounds,
                     componentRestrictions: { country: "us" },
                     fields: ["address_components", "geometry", "icon", "name"],
                     strictBounds: false,
                     types: ["establishment"],
                 };
                 const autocomplete = new window.google.maps.places.Autocomplete(input, options);
                 autocomplete.setFields(["place_id", "geometry", "name"]);
             },[]);
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const { place_id, structured_formatting: { main_text, secondary_text }, } = suggestion;
  
        return (
            // <input id="searchTextField" type="text" ></input>
           <li key={place_id} onClick={handleSelect(suggestion)}>
             <strong>{main_text}</strong> <small>{secondary_text}</small>
           </li>
        );
      });
  
    return (
      <div ref={ref}>
        <input value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        />
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <ul>{renderSuggestions()}</ul>}
      </div>
    );
  };
=======

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const { place_id, structured_formatting: { main_text, secondary_text }, } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Where are you going?"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === "OK" && <ul>{renderSuggestions()}</ul>}
    </div>
  );
};
>>>>>>> d184bacffaf27c1a847b70f54dfc9764e6e9d0de


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShowMap() {
  const center = useMemo(() => ({ lat: 32, lng: 35 }), [])
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyATWY22XLTW2VgrhuONDfz5GT4FQJreBIs",
  });
  if (!isLoaded) return <div>isLoading...</div>
  return (
    <Item >
      <GoogleMap zoom={10} center={center} mapContainerClassName="mapContainer">
        <Marker position={center}></Marker>
      </GoogleMap>
    </Item>
  )
}

// function AppAuto() {

<<<<<<< HEAD
//     const center = { lat: 30, lng: 45 };
//     // Create a bounding box with sides ~10km away from the center point
//     const defaultBounds = {
//         north: center.lat + 0.1,
//         south: center.lat - 0.1,
//         east: center.lng + 0.1,
//         west: center.lng - 0.1,
//     };
//     useEffect(() => {
//         const input = document.getElementById("searchTextField") as HTMLInputElement;
//         const options = {
//             bounds: defaultBounds,
//             componentRestrictions: { country: "us" },
//             fields: ["address_components", "geometry", "icon", "name"],
//             strictBounds: false,
//             types: ["establishment"],
//         };
//         const autocomplete = new window.google.maps.places.Autocomplete(input, options);
//         autocomplete.setFields(["place_id", "geometry", "name"]);
//     },[]);
   
//  return (<input id="searchTextField" type="text" ></input>)
=======
  const center = { lat: 30, lng: 45 };
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
  }, []);

  return (<input id="searchTextField" type="text" ></input>)
>>>>>>> d184bacffaf27c1a847b70f54dfc9764e6e9d0de

// }

function SearchScreen() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={20} md={20}>
          <div>
            <h4>Try ***</h4>
          </div>
        </Grid>
        <Grid item xs={60} md={8}>
          <ShowMap />
        </Grid>
        <Grid item xs={60} md={4}>
          <PlacesAutocomplete />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchScreen
// PlacesAutocomplete
// AppAuto
// 
