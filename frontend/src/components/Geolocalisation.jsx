import React from "react";

function Geolocalisation() {
  if ("geolocation" in navigator) {
    console.warn("Available");
  } else {
    console.warn("Not Available");
  }
  navigator.geolocation.getCurrentPosition(function (position) {
    console.warn("Latitude is :", position.coords.latitude);
    console.warn("Longitude is :", position.coords.longitude);
  });

  return <div />;
}

export default Geolocalisation;
