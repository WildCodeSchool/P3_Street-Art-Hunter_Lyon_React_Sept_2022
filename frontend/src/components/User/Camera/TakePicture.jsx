import React, { useState } from "react";
import Webcam from "react-webcam";
import BottomNavCamera from "./BottomNavCamera";
import BottomNavCamActive from "./BottomNavCamActive";
import { useCurrentPhotoContext } from "../../../contexts/photoContext";
import Geolocalisation from "../Global/Geolocalisation";
import { useCurrentResponsiveContext } from "../../../contexts/responsiveContext";

function TakePicture() {
  const { isMobile, isTablet, isLittleMobile } = useCurrentResponsiveContext();
  const [photo, setPhoto] = useState(false);
  const [validation, setValidation] = useState(false);
  const { contextPhoto } = useCurrentPhotoContext();
  const videoConstraints = {
    width: 450,
    height: 700,
    facingMode: { exact: "environment" },
  };

  const videoConstraintsTablet = {
    width: 650,
    height: 700,
    facingMode: { exact: "environment" },
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
    <div>
      {isLittleMobile && (
        <div className="pt-[4.5rem]">
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
            <BottomNavCamActive
              setPhoto={setPhoto}
              setValidation={setValidation}
            />
          )}
        </div>
      )}
      {isTablet && (
        <div className="pt-[10rem]">
          <Geolocalisation />
          {!photo ? (
            <Webcam
              audio={false}
              height={720}
              width={1280}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={videoConstraintsTablet}
            />
          ) : (
            imgSrc && <img src={imgSrc} alt="" />
          )}

          {!validation ? (
            <BottomNavCamera capture={capture} />
          ) : (
            <BottomNavCamActive
              setPhoto={setPhoto}
              setValidation={setValidation}
            />
          )}
        </div>
      )}

      {isMobile && (
        <div className="pt-[6rem]">
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
            <BottomNavCamActive
              setPhoto={setPhoto}
              setValidation={setValidation}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default TakePicture;
