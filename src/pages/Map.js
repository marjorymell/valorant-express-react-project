import React from "react";
import Background from "../components/Background/Background";
import MapPage from "../components/MapPage/MapPage";

const Map = () => {
  return (
    <Background>
      <MapPage />
      <div style={{ marginBottom: "100px" }} />
    </Background>
  );
};

export default Map;
