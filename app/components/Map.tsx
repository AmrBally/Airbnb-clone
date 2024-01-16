"use client";
import MapGl, { Marker, Popup } from "react-map-gl";
import { SearchResultData, LisingCardItem } from "../types/app";
import { useState } from "react";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import Image from "next/image";
import markerImg from "@/public/663342.png";

const Map = ({ searchResultData }: { searchResultData: SearchResultData }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<LisingCardItem | null>(null);

  const coordinates = searchResultData.map((listing) => ({
    longitude: listing.long,
    latitude: listing.lat,
  }));

  const center = getCenter(coordinates) as {
    longitude: number;
    latitude: number;
  };

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    zoom: 11,
    longitude: center.longitude,
    latitude: center.latitude,
  });

  return (
    <MapGl
      {...viewport}
      mapStyle="mapbox://styles/kareem2002shimes/cl9ogfais007a14o2dcf0byo6"
      // mapboxAccessToken={process.env.NEXT_PUPLIC_MAPBOX_KEY}
      mapboxAccessToken="pk.eyJ1Ijoia2FyZWVtMjAwMnNoaW1lcyIsImEiOiJjbHIyNXRqdGgxMDd5MnB0M3NhcGU0dW00In0.AzOg6_5maKfFjnxNwExWhg"
      onMove={(nextViewPort) => {
        setViewport((prev) => {
          return {
            ...prev,
            longitude: nextViewPort.viewState.longitude,
            latitude: nextViewPort.viewState.latitude,
          };
        });
      }}
    >
      {searchResultData.map((lising) => (
        <div onClick={() => setSelectedLocation(lising)} key={lising.long}>
          <Marker longitude={lising.long} latitude={lising.lat}>
            <div className="animate-bounce">
              <Image src={markerImg} alt="Marker-img" width={24} height={24} />
            </div>
          </Marker>
          {selectedLocation?.long === lising.long ? (
            <Popup
              closeOnClick={false}
              onClose={() => setSelectedLocation(null)}
              longitude={lising.long}
              latitude={lising.lat}
            >
              {lising.title}
            </Popup>
          ) : null}
        </div>
      ))}
    </MapGl>
  );
};

export default Map;
