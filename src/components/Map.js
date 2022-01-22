import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import Marker from "./Marker";
import Loader from "./Loader";
import InfoBox from "./InfoBox";
import Title from "./Title";

const MapContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

const Map = () => {
  const [data, setData] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(6);
  const [dataToShow, setDataToShow] = useState(null);
  const [loadingState, setLoadingState] = useState(false);

  useEffect(() => {
    (async function getData() {
      setLoadingState(true);
      const apiData = await fetch(
        "https://eonet.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await apiData.json();
      const wildfires = events.filter((wildfire) => {
        return wildfire.categories[0].id === 8;
      });
      setData(wildfires);
      setLoadingState(false);
    })();
  }, []);

  const MapProps = {
    center: {
      lat: 42.88,
      lng: 74.58,
    },
    zoom: 6,
  };

  return loadingState === true ? (
    <Loader />
  ) : (
    <MapContainer>
      <Title />
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API }}
        defaultCenter={MapProps.center}
        defaultZoom={MapProps.zoom}
        onZoomAnimationStart={(zoom) => setZoomLevel(zoom)}
      >
        {data.map((element) => (
          <Marker
            key={element.id}
            lat={element.geometries[0].coordinates[1]}
            lng={element.geometries[0].coordinates[0]}
            zoomLevel={zoomLevel}
            data={element}
            setDataToShow={setDataToShow}
          />
        ))}
      </GoogleMapReact>
      {dataToShow && (
        <InfoBox data={dataToShow} setDataToShow={setDataToShow} />
      )}
    </MapContainer>
  );
};

export default Map;
