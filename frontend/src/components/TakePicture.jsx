import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Camera, { IMAGE_TYPES } from "react-html5-camera-photo";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-html5-camera-photo/build/css/index.css";
import BottomNavCamera from "./BottomNavCamera";

function TakePicture() {
  return (
    <div>
      <Camera
        imageType={IMAGE_TYPES.JPG}
        idealResolution={{ width: 100, height: 300 }}
      />
      <BottomNavCamera />
    </div>
  );
}

export default TakePicture;
