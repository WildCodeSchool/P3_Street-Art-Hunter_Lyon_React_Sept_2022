import React, { useState } from "react";
import Webcam from "react-webcam";
import BottomNavCamera from "./BottomNavCamera";
import BottomNavCamActive from "./BottomNavCamActive";
import { useCurrentPhotoContext } from "../../../contexts/photoContext";
import Geolocalisation from "../Global/Geolocalisation";

function TakePicture() {
  const [photo, setPhoto] = useState(false);
  const [validation, setValidation] = useState(false);
  const { contextPhoto } = useCurrentPhotoContext();
  const videoConstraints = {
    width: 450,
    height: 700,
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setPhoto(!photo);
    setValidation(!validation);
    contextPhoto.current = imageSrc;
  }, [webcamRef, setImgSrc]);

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
        imgSrc && <img src={imgSrc} alt="" />
      )}

      {!validation ? (
        <BottomNavCamera capture={capture} />
      ) : (
        <BottomNavCamActive setPhoto={setPhoto} setValidation={setValidation} />
      )}
    </>
  );
}

export default TakePicture;
