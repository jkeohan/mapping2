import * as React from 'react';
import {useState} from 'react';
import MapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiamltcGZyZWQiLCJhIjoiY2twNHU2bzJyMjNzZzJ1cXcweTN6azMyZSJ9.EL6OH1RDBnamvnIFj9tmXw'

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    pitch: 20
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
}
