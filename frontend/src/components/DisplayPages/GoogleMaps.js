






import React from 'react';
import axios from 'axios';
import '../../App.css'
import './GoogleMaps.css'
import {
  GoogleMap,
  useLoadScript,
  Marker, 
  InfoWindow,
} from "@react-google-maps/api";
import { formatRelative } from "date-fns";
import "@reach/combobox/styles.css";
import mapStyles from './mapStyles';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";


const libraries = ["places"];
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
}

const center = {
  lat: 43.653225,
  lng: -79.383186,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,

};

function GoogleMaps() {

 
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey:"AIzaSyBNOyOJG_-g7kNxQ8_3Ku4eyTE-RSVsR60",                                            
    libraries,
  });
  const [markers, setMarkers] = React.useState([]);
  const [selected, setSelected] = React.useState(null);

  const onMapClick = React.useCallback((event) => {
    setMarkers(current => [
      ...current, 
      {
     lat: event.latLng.lat(),
     lng: event.latLng.lng(),
     time: new Date(),
  }, 
  ]);
}, []);

  // ProcessingInstruction.env.REACT_APP_GOOGLE_MAPS_API_KEY,

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const panTo = React.useCallback(({lat, lng}) => {
    mapRef.current.panTo({lat, lng});
    mapRef.current.setZoom(14);
  }, []);

  async function getRestaurants(lat={lat}, lng={lng}) {
    let results =await axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${lng}&radius=7000&type=restaurant&open_now=true&key=AIzaSyBNOyOJG_-g7kNxQ8_3Ku4eyTE-RSVsR60`);
    console.log("Nearby Restaurants", results.data)
    }


  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

return (
  <div>
    {/* <h1>IMWPD </h1> */}

<Search panTo={panTo}/>
<Locate panTo={panTo}/>

    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
      options={options}
      onClick={onMapClick}
      onLoad={onMapLoad}
      
      >
        {markers.map((marker) => (
          <Marker 
          key={marker.time.toISOString()} 
          position={{ lat: marker.lat, lng: marker.lng }}  
           
           onClick={() => {
             setSelected(marker);
           }}
           />
        ))}
        {selected ? (
        <InfoWindow 
        position={{lat: selected.lat, lng: selected.lng}} 
        onCloseClick={() => {
          setSelected(null)}
        
        }>
          <div>
            <h2>Selected Spot</h2>
            <p>Selected {formatRelative(selected.time, new Date())}</p>
          </div>
        </InfoWindow>
        ) : null}
      </GoogleMap>
  </div>

);
}

function Locate ({ panTo }) {
  return (
  <button onClick={() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        panTo({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        })
      }, 
      () => null, 
      options
      );
  }}>
    <h1>Locate Me</h1>
    </button>
  );
}

function Search({ panTo }) {
  const {
    ready, 
    value, 
    suggestions: { status, data }, 
    setValue, 
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      location: {lat: ()  => 43.653225, lng: () => -79.383186 },
      radius: 200 * 1000,
  },
});

  return (
    <div className="search">
  <Combobox 
    onSelect={async (address) => {
      setValue(address, false);
      clearSuggestions();

      try {
        const results = await getGeocode({address});
        const { lat, lng } = await getLatLng(results[0]);
        panTo({ lat, lng});
        console.log(lat, lng);
      } catch(error) {
        console.log("error");
      }
    
      // {console.log(address);
    }}
  >
    <ComboboxInput 
      value={value} 
      onChange={(e) => {
        setValue(e.target.value);
    }}
    disabled={!ready}
    placeholder="Enter an address"
    />
    <ComboboxPopover>
      <ComboboxList>
      {status === "OK" && 
      data.map(({ id, description }) => (
        <ComboboxOption key={id} value={description} />
      ))}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
  </div>
  );
  }
export default GoogleMaps;
