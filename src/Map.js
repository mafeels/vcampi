import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import Perfil from "./Perfil";
import Chat from "./Chat";

// CSS 
import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';

// json
import Pins from "./pins";

//import reportWebVitals from './reportWebVitals';

const Map = () => {
  const bounds = [[-47.1, -22.85], [-47.02,-22.79]];

  const [viewport, setViewport] = useState({
    latitude: -22.8184,
    longitude: -47.0647,
    zoom: 14,
    maxBounds: bounds
  });

  const [selectedPin, setSelectedPin] = useState(null);

  return(
      <ReactMapGL
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      
      {...viewport}
      onMove={evt => setViewport(evt.viewport)}
      mapStyle="mapbox://styles/mapbox/streets-v9"

      style={{
        height:'100vh',
        width: '100vw'
      }}

      
      >
      <div className='componente'>
      {/* esse componente PERFIL vai ser 'child' do mapa */}
      <Perfil></Perfil>

      {/*<Chat></Chat>*/}
      </div>

      {Pins.features.map( pin => (
        <Marker key={pin.properties.key} 
        longitude={pin.geometry.coordinates[0]} 
        latitude={pin.geometry.coordinates[1]} 
        >
          <button 
          onClick={(e) => {
            e.preventDefault();
            setSelectedPin(pin);
            }}
            className="pin">
            <img src="./lazer.png" style={{width:'35px', height:'35px'}} alt="pin"/>
          </button>
        </Marker>

      ))}

      <Marker key={6} 
        longitude={-47.0647} 
        latitude={-22.8184} 
        >
          <button 
          onClick={(e) => {
            e.preventDefault();
            //setSelectedPin(pin);
            }}
            className="pin">
            <img src="./pin.png" style={{width:'35px', height:'35px'}} alt="pin"/>
          </button>
      </Marker>

      {selectedPin ? (
        <Popup
        closeOnClick={false}
        longitude={selectedPin.geometry.coordinates[0]} 
        latitude={selectedPin.geometry.coordinates[1]}
        onClose={() => setSelectedPin(null)}
        >
          <div>
            <h5>{selectedPin.properties.nome}</h5>
            <p>{selectedPin.properties.sobre}</p>
            <p >{selectedPin.properties.locais_Proximos}</p>
          </div>
        </Popup>
      ) : null }

      </ReactMapGL>
  );
};

export default Map