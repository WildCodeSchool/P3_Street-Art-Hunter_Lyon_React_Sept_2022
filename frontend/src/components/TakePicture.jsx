import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import Webcam from "react-webcam";
import BottomNavCamera from "./BottomNavCamera";
import BottomNavCamActive from "./BottomNavCamActive";
import Geolocalisation from "./Geolocalisation";

function TakePicture() {
  const [photo, setPhoto] = useState(false);
  const [validation, setValidation] = useState(false);

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
        // eslint-disable-next-line jsx-a11y/alt-text
        imgSrc && <img src={imgSrc} />
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
