import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from 'axios';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

// Centro inicial en Miraflores, Lima, Perú
const initialCenter = {
  lat: -12.122618, 
  lng: -77.029176,
};

export default function MapApp() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'fdsafdasfasdfdasfdasfdsafdas', // Reemplaza con tu clave de API
  });

  const [marker, setMarker] = useState(null); // Usamos solo un marcador
  const [center, setCenter] = useState(initialCenter); // Estado para el centro del mapa

  // Añadir o actualizar el marcador
  const onMapClick = useCallback((event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };

    // Actualizamos el marcador
    setMarker(newMarker);

    // Guardar la ubicación en la base de datos MySQL
    saveLocationToDatabase(newMarker);
  }, []);

  // Guardar la ubicación en la base de datos
  const saveLocationToDatabase = async (location) => {
    try {
      const response = await axios.post('http://localhost:3000/api/guardar-ubicacion', {
        lat: location.lat,
        lng: location.lng,
      });
      if (response.status === 200) {
        console.log('Ubicación guardada con éxito');
      } else {
        console.error('Error al guardar la ubicación');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  };

  if (!isLoaded) return <div>Cargando...</div>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14} // Zoom adecuado para ver Miraflores
        center={center}
        onClick={onMapClick}
      >
        {marker && (
          <Marker
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        )}
      </GoogleMap>
    </div>
  );
}
