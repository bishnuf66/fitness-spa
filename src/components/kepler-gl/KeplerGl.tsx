// components/KeplerMap.tsx
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { useMapContext } from "@/providers/MapContext";
// Dynamically import KeplerGl to ensure it's client-side only
const KeplerGl = dynamic(() => import("kepler.gl"), { ssr: false });

const KeplerMap: React.FC = () => {
  const { geoJsonData } = useMapContext();

  useEffect(() => {
    if (geoJsonData) {
      console.log("GeoJSON Data Loaded:", geoJsonData);
    }
  }, [geoJsonData]);

  if (!geoJsonData) {
    return <div>Loading Map...</div>;
  }

  return (
    <KeplerGl
      id="map"
      mapboxApiAccessToken="YOUR_MAPBOX_API_KEY" // Replace with your Mapbox API key
      width="100%"
      height="100vh"
    />
  );
};

export default KeplerMap;
