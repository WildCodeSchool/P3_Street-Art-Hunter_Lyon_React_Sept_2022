import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Webcam from "react-webcam";
import BottomNavCamera from "./BottomNavCamera";
import BottomNavCamActive from "./BottomNavCamActive";
import { useCurrentUserContext } from "../../../contexts/userContext";
import { useCurrentPhotoContext } from "../../../contexts/photoContext";

const backURL = import.meta.env.VITE_BACKEND_URL;

function TakePicture() {
  const [photo, setPhoto] = useState(false);
  const [validation, setValidation] = useState(false);
  const { setContextPhoto, contextPhoto } = useCurrentPhotoContext();
  const videoConstraints = {
    width: 400,
    height: 600,
    facingMode: "user",
  };
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    setPhoto(!photo);
    setValidation(!validation);
    setContextPhoto(imageSrc);
  }, [webcamRef, setImgSrc]);

  const { user } = useCurrentUserContext();

  const handleSendPhoto = () => {
    // const formData = new FormData();
    // formData.append("photo", pic);

    fetch(`${backURL}/photo`, {
      method: "POST",
      body: JSON.stringify({ image: contextPhoto, filename: user.pseudo }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  };

  return (
    <>
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
          handleSubmit={handleSendPhoto}
        />
      )}
    </>
  );
}

export default TakePicture;
