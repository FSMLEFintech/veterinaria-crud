// Ejemplo de cómo cargar Google Maps en un componente React
export const loadGoogleMaps = () => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=TU_API_KEY&libraries=places`;
      document.body.appendChild(script);
      script.onload = () => {
        console.log('Google Maps API loaded');
      };
    }
  };
  