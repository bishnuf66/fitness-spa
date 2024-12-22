// pages/index.tsx
import React from "react";
import MapProvider
import KeplerMap from "../components/KeplerMap";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Kepler.gl Map of Nepal</h1>
      <KeplerMap />
    </div>
  );
};

export default Home;
