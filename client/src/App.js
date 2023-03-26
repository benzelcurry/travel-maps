import React from 'react';
import Map, { Marker } from 'react-map-gl';

import './App.css';

const App = () => {
  return (
    <Map
      initialViewState={{
        longitude: -122.6784,
        latitude: 45.5152,
        zoom: 10
      }}
      style={{width: "50vw", height: "50vh"}}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
      <Marker longitude={-122.7784} latitude={45.5352} anchor="bottom" >
      <div className='here'>You are here</div>
    </Marker>
    </Map>
  );
};

export default App;