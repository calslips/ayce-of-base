import * as React from 'react';
import Map, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const App = () => {
  const [showPopup, setShowPopup] = React.useState(true);

  return (
    <Map
      initialViewState={{
        latitude: 40.7429,
        longitude: -73.9188,
        zoom: 5
      }}
      style={ { width: "100vw", height: "100vh" } }
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={ process.env.REACT_APP_MAPBOX_TOKEN }
    >
      <Marker latitude={ 40.7429 } longitude={ -73.9188 } color="red" />
      {showPopup && (
        <Popup latitude={ 40.7429 } longitude={ -73.9188 }
          anchor="right"
          onClose={() => setShowPopup(false)}>
          You are here
        </Popup>)}
    </Map>
  );
}

export default App;
