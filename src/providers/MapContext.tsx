// context/MapContext.tsx
// context/MapContext.tsx
import geoJsonData from '../data/nepal-districts.geojson';

// Use this imported data directly in the context

import React, { createContext, useContext, useState, useEffect } from "react";

// Define the type for the GeoJSON data
interface GeoJsonData {
  type: string;
  features: any[];
}

interface MapContextType {
  geoJsonData: GeoJsonData | null;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

export const useMapContext = (): MapContextType => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};

export const MapProvider: React.FC = ({ children }) => {
  const [geoJsonData, setGeoJsonData] = useState<GeoJsonData | null>(null);

  useEffect(() => {
    // Fetch or import GeoJSON data for Nepal's districts
    fetch("/nepal-districts.geojson") // Adjust the path to your actual GeoJSON file
      .then((response) => response.json())
      .then((data: GeoJsonData) => {
        setGeoJsonData(data);
      });
  }, []);

  return (
    <MapContext.Provider value={{ geoJsonData }}>
      {children}
    </MapContext.Provider>
  );
};
