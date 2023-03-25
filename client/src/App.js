import React from 'react';
import Map from 'react-map-gl';

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
    />
  );
};

export default App;