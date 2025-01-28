import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMyContext } from "../context/ContextApi";
console.log( process.env.REACT_APP_MAP_ACCESS_TOKEN);


mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;

const MapView = () => {
  const { state,dispatch } = useMyContext();
  const { location,carbonData } = state;
  const lat = location.loc.lat;
  const lng = location.loc.lng;
  const mapContainer = useRef(null);
  

  // Fetch carbon intensity data
  useEffect(() => {
    const fetchCarbonIntensity = async () => {
      try {
        const response = await fetch(`https://api.carbonintensity.org.uk/regional/regionid/${location.id}`);
        const data = await response.json();
        dispatch({ type: "SET_CARBON_DATA", payload: data.data[0]});
      } catch (error) {
        console.error("Error fetching carbon intensity data:", error);
      }
    };

    fetchCarbonIntensity();
  }, [location]);

  // Set up the map and heatmap
  useEffect(() => {
    if (!mapContainer.current) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v9",
      center: [5, 56], 
      zoom: 4,
    });
    
    // Array to hold heatmap data (coordinates and intensity)
    const heatmapData = [];

    carbonData?.data?.forEach((entry) => {
      if (entry && entry.intensity && entry.from) {
        const intensityLevel = entry.intensity.index || "unknown";
        const color =
          intensityLevel === "low"
            ? "green"
            : intensityLevel === "moderate"
            ? "yellow"
            : intensityLevel === "high"
            ? "red"
            : "blue"; // Fallback color

        // Generate random coordinates for testing

        // Add marker
        new mapboxgl.Marker({ color })
          .setLngLat([lng, lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<h3>Intensity: ${entry.intensity.forecast}</h3><p>Time: ${entry.from}</p>`
            )
          )
          .addTo(map);

        // Add heatmap data (with intensity as a weight)
        heatmapData.push([lng, lat, entry.intensity.forecast]); // Add forecast as intensity value
      }
    });

    // Add a heatmap layer
    map.on("load", () => {
      map.addLayer({
        id: "heatmap",
        type: "heatmap",
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: heatmapData.map(([lng, lat, intensity]) => ({
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [lng, lat],
              },
              properties: {
                intensity: intensity,
              },
            })),
          },
        },
        paint: {
          "heatmap-weight": ["get", "intensity"],
          "heatmap-intensity": 0.5,
          "heatmap-color": [
            "interpolate",
            ["linear"],
            ["heatmap-density"],
            0,
            "rgba(33,102,172,0)",
            0.1,
            "rgb(103,169,207)",
            0.3,
            "rgb(209,229,240)",
            0.5,
            "rgb(253,219,199)",
            0.7,
            "rgb(239,138,98)",
            1,
            "rgb(178,24,43)",
          ],
          "heatmap-radius": 30,
          "heatmap-opacity": 0.7,
        },
      });
    });

    return () => map.remove();
  }, [carbonData]);

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="border-2 rounded-xl shadow-md border-transparent" ref={mapContainer} style={{ height: "70vh", width: "70vw" }} />
    </div>
  );
};

export default MapView;
