import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const MarkerLocation = styled.div`
  width: 100px;
  height: 100px;
  font-size: ${(props) => (props.fontSize > 5 ? "2rem" : "1rem")};
  color: red;
`;

const Marker = (props) => {
  const [zoomLevel, setZoomLevel] = useState(props.zoomLevel);

  useEffect(() => {
    setZoomLevel(props.zoomLevel);
  }, [props.zoomLevel]);

  return (
    <MarkerLocation
      fontSize={zoomLevel}
      onClick={() => props.setDataToShow(props.data)}
    >
      <Icon icon="noto-v1:fire" />
    </MarkerLocation>
  );
};

export default Marker;
