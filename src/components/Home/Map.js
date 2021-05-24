import React from "react";
import { GoogleMap, useJsApiLoader, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const centers = [
  {
    lat: 53.20548,
    lng: 23.20592,
  },
];

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA1alshfkMwsP8leA9dRSxVuaplwBZigCA",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    // map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const divStyle = {
    background: `white`,
    border: `1px solid #ccc`,
    padding: 15,
  };
  const linkStyle = {
    textDecoration: "none",
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={centers[0]}
        position={centers[0]}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <>
          <InfoWindow onLoad={onLoad} position={centers[0]}>
            <div style={divStyle}>
              <h2>Multi Okna sp. z o.o.</h2>
              <p>Tu jesteśmy</p>
              <a style={linkStyle} href="tel:607473123">
                Tel 607 473 123
              </a>
            </div>
          </InfoWindow>
        </>
      </GoogleMap>
    </div>
  ) : (
    <>{/* { where is map?} */}</>
  );
}

export default React.memo(MyComponent);
