import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-html5-camera-photo/build/css/index.css";
// import BottomNavCamera from "./BottomNavCamera";

function dataURItoBlob(dataURI) {
  const byteString = atob(dataURI.split(",")[1]);

  // separate out the mime component
  const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

  const ab = new ArrayBuffer(byteString.length);
  const ia = new Uint8Array(ab);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  const blob = new Blob([ab], { type: mimeString });
  return blob;
}

function padWithZeroNumber(number, width) {
  // eslint-disable-next-line no-param-reassign
  number += "";
  return number.length >= width
    ? number
    : new Array(width - number.length + 1).join("0") + number;
}

function getFileExtention(blobType) {
  // by default the extention is .png
  let extention = IMAGE_TYPES.PNG;

  if (blobType === "image/jpeg") {
    extention = IMAGE_TYPES.JPG;
  }
  return extention;
}

function getFileName(imageNumber, blobType) {
  const prefix = "photo";
  const photoNumber = padWithZeroNumber(imageNumber, 4);
  const extention = getFileExtention(blobType);

  return `${prefix}-${photoNumber}.${extention}`;
}

function downloadImageFileFomBlob(blob, imageNumber) {
  window.URL = window.webkitURL || window.URL;

  // eslint-disable-next-line prefer-const
  let anchor = document.createElement("a");
  anchor.download = getFileName(imageNumber, blob.type);
  anchor.href = window.URL.createObjectURL(blob);
  // eslint-disable-next-line prefer-const
  let mouseEvent = document.createEvent("MouseEvents");
  mouseEvent.initMouseEvent(
    "click",
    true,
    true,
    window,
    1,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  anchor.dispatchEvent(mouseEvent);
}

function downloadImageFile(dataUri, imageNumber) {
  const blob = dataURItoBlob(dataUri);
  downloadImageFileFomBlob(blob, imageNumber);
}

// eslint-disable-next-line no-unused-vars
function TakePicture(props) {
  const [imageNumber, setImageNumber] = useState(0);

  function handleTakePhoto(dataUri) {
    downloadImageFile(dataUri, imageNumber);
    setImageNumber(imageNumber + 1);
  }

  return (
    <div>
      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
        imageType={IMAGE_TYPES.PNG}
        idealResolution={{ width: 250, height: 390 }}
        idealFacingMode={FACING_MODES.ENVIRONMENT}
      />
    </div>
  );
}

export default TakePicture;
