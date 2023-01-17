/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import Webcam from "react-webcam";
// eslint-disable-next-line import/no-extraneous-dependencies
import FormData from "form-data";
import BottomNavCamera from "./BottomNavCamera";
import BottomNavCamActive from "./BottomNavCamActive";
import Geolocalisation from "./Geolocalisation";

import { useCurrentUserContext } from "../contexts/userContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function TakePicture() {
  const [photo, setPhoto] = useState(false);
  const [validation, setValidation] = useState(false);
  const { token } = useCurrentUserContext();

  const videoConstraints = {
    height: 1000,
    width: 450,
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setPhoto(!photo);
    setValidation(!validation);
    // setPic(imageSrc);
  }, [webcamRef, setImgSrc]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", imgSrc);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    };

    fetch(`${backURL}/upload`, requestOptions)
      .then((response) => response.formData())
      .then((data) => {
        console.warn("Success:", data);
        // traitement des données de la réponse du serveur
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  console.warn(imgSrc);

  return (
    <>
      <Geolocalisation />
      {!photo ? (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
        />
      ) : (
        // eslint-disable-next-line jsx-a11y/alt-text
        imgSrc && <img src={imgSrc} />
      )}

      {!validation ? (
        <BottomNavCamera capture={capture} />
      ) : (
        <BottomNavCamActive
          setPhoto={setPhoto}
          setValidation={setValidation}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

export default TakePicture;
