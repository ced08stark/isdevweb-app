import React, { useEffect } from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import { useRef } from "react";






const MapComponent  = () => {
  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
  });
  const center ={lat: 48.8584, lng: 2.2945}

 
  /*const mapRef = useRef(null)
  useEffect(()=>{
    new MapView({
      container: mapRef.current,
      map: new Map({
        basemap: "dark-gray",
      }),
      zoom: 3,
    })
  }, [mapRef])*/

  //return <div className="h-[300px]" style={{width: "100%"}}></div>;
  return (
<GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>
    {
      
    }
  </GoogleMap>
  )
  
  
};



 
export default MapComponent;