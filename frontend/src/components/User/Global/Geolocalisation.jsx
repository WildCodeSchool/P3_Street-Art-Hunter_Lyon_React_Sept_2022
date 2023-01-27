import * as React from "react";

import { useCurrentPhotoContext } from "../../../contexts/photoContext";

function Geolocalisation() {
  const [open] = React.useState(false);

  const { contextPhotoCoord } = useCurrentPhotoContext();

  const handleGeo = () => {
    if (!open) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          contextPhotoCoord.current = [latitude, longitude];
          console.warn(latitude, longitude);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  };

  return handleGeo();
}

export default Geolocalisation;
