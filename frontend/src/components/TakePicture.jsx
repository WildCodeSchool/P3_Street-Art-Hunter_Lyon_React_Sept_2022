/* eslint-disable react/button-has-type */
import React from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import switchCamera from "@assets/switchCamera.png";
import SwitchButtonNav from "./SwitchButtonNav";

class TakePicture extends React.Component {
  constructor() {
    super();

    this.cameraNumber = 0;

    this.state = {
      imageDataURL: null,
    };
  }

  initializeMedia = async () => {
    this.setState({ imageDataURL: null });

    if (!("mediaDevices" in navigator)) {
      navigator.mediaDevices = {};
    }

    if (!("getUserMedia" in navigator.mediaDevices)) {
      // eslint-disable-next-line func-names
      navigator.mediaDevices.getUserMedia = function (constraints) {
        const getUserMedia =
          navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        if (!getUserMedia) {
          return Promise.reject(new Error("getUserMedia Not Implemented"));
        }

        return new Promise((resolve, reject) => {
          getUserMedia.call(navigator, constraints, resolve, reject);
        });
      };
    }

    // Get the details of video inputs of the device
    const videoInputs = await this.getListOfVideoInputs();

    // The device has a camera
    if (videoInputs.length) {
      navigator.mediaDevices
        .getUserMedia({
          video: {
            deviceId: {
              exact: videoInputs[this.cameraNumber].deviceId,
            },
          },
        })
        .then((stream) => {
          this.player.srcObject = stream;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      // eslint-disable-next-line no-alert
      alert("The device does not have a camera");
    }
  };

  capturePicture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = this.player.videoWidth;
    canvas.height = this.player.videoHeight;
    const contex = canvas.getContext("2d");
    contex.drawImage(this.player, 0, 0, canvas.width, canvas.height);
    this.player.srcObject.getVideoTracks().forEach((track) => {
      track.stop();
    });

    console.warn(canvas.toDataURL());
    this.setState({ imageDataURL: canvas.toDataURL() });
  };

  switchCamera = async () => {
    const listOfVideoInputs = await this.getListOfVideoInputs();

    // The device has more than one camera
    if (listOfVideoInputs.length > 1) {
      if (this.player.srcObject) {
        this.player.srcObject.getVideoTracks().forEach((track) => {
          track.stop();
        });
      }

      // switch to second camera
      if (this.cameraNumber === 0) {
        this.cameraNumber = 1;
      }
      // switch to first camera
      else if (this.cameraNumber === 1) {
        this.cameraNumber = 0;
      }

      // Restart based on camera input
      this.initializeMedia();
    } else if (listOfVideoInputs.length === 1) {
      // eslint-disable-next-line no-alert
      alert("The device has only one camera");
    } else {
      // eslint-disable-next-line no-alert
      alert("The device does not have a camera");
    }
  };

  // eslint-disable-next-line class-methods-use-this
  getListOfVideoInputs = async () => {
    // Get the details of audio and video output of the device
    const enumerateDevices = await navigator.mediaDevices.enumerateDevices();

    // Filter video outputs (for devices with multiple cameras)
    return enumerateDevices.filter((device) => device.kind === "videoinput");
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const playerORImage = this.state.imageDataURL ? (
      // eslint-disable-next-line react/destructuring-assignment
      <img src={this.state.imageDataURL} alt="cameraPic" />
    ) : (
      // eslint-disable-next-line jsx-a11y/media-has-caption
      <video
        ref={(refrence) => {
          this.player = refrence;
        }}
        autoPlay
      />
    );

    return (
      <div className="App">
        {playerORImage}
        <button onClick={this.initializeMedia}>Take Photo</button>
        <footer className="bottom-0 fixed w-full bg-bottom z-50">
          <div className="flex justify-center">
            <button
              type="button"
              className="relative z-10 top-[4.5rem] drop-shadow-photobutton"
              onClick={this.capturePicture}
            >
              <div className="bg-gradient-to-b from-[#6573ED] to-[#14D2E6] rounded-[100%]  w-20  h-20 p-[0.4rem]">
                <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center" />
              </div>
            </button>
          </div>
          <div>
            <button
              type="button"
              className=" z-20 absolute right-8 top-28"
              onClick={this.switchCamera}
            >
              <div className="bg-gradient-to-b from-pink to-lightblue rounded-[100%]  w-[3.6rem]  h-[3.6rem] p-[0.2rem]">
                <div className="w-full h-full rounded-[100%] bg-gradient-to-b from-bottomdark to-[#454377] flex justify-center items-center">
                  <img
                    src={switchCamera}
                    alt="Switch camera"
                    className=" flex w-[1.5rem] h-[1.5rem]"
                  />
                </div>
              </div>
            </button>
          </div>
          <div className="w-full h-[177px] bg-bottomNavGrad drop-shadow-bottomtop bg-cover flex items-end justify-around">
            <NavLink to="/scores">
              <SwitchButtonNav
                content="SCORES"
                styleModif="mb-4 w-[100px] text-3xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
            <NavLink to="/galerie">
              <SwitchButtonNav
                content="GALERIE"
                styleModif="mb-4 w-[100px] text-3xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
            <NavLink to="/map">
              <SwitchButtonNav
                content="MAP"
                styleModif="mb-4 w-[100px] text-3xl"
                bgColor="bg-bottomdark"
              />
            </NavLink>
          </div>
        </footer>
      </div>
    );
  }
}

export default TakePicture;
