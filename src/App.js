import * as React from 'react';
import {useState} from 'react';
import MapGL, { Marker} from 'react-map-gl';

const longitude1 = -117.93113
const latitude1 = 33.7032626
const longitude2 = -117.94
const latitude2 = 33.71
const longitude3 = -117.95113
const latitude3 = 33.7012626
const longitude4 = -117.949
const latitude4 = 33.71
const longitude5 = -117.93113
const latitude5 = 33.70
const longitude6 = -117.94
const latitude6 = 33.723
const longitude7 = -117.98113
const latitude7 = 33.712626
const longitude8 = -117.949
const latitude8 = 33.71


const MAPBOX_TOKEN = 'pk.eyJ1IjoiamltcGZyZWQiLCJhIjoiY2twNHU2bzJyMjNzZzJ1cXcweTN6azMyZSJ9.EL6OH1RDBnamvnIFj9tmXw'

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 33.7032626,
    longitude: -117.93113,
    zoom: 14,
    pitch: 30
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/jimpfred/ckpyoslp90u5k17s23zytp443"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    >
      <Marker latitude={latitude1} longitude={longitude1}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude2} longitude={longitude2}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude3} longitude={longitude3}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude4} longitude={longitude4}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude5} longitude={longitude5}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude5} longitude={longitude5}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude6} longitude={longitude6}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude7} longitude={longitude7}>
            <div>*</div>
          </Marker>
          <Marker latitude={latitude8} longitude={longitude8}>
            <div>*</div>
          </Marker>
    </MapGL>
  );
}
