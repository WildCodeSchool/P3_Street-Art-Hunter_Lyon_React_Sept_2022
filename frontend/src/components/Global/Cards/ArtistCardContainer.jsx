import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-unresolved
import Daryl from "@assets/images/Daryl.jpg";
import { useCurrentUserContext } from "../../../contexts/userContext";

function ArtistCardContainer() {
  const [artists, setArtists] = useState([]);

  const [pictures, setPictures] = useState([]);
  const { token } = useCurrentUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    // Make HTTP request to fetch artists

    // Make HTTP request to fetch pictures
    const fetchPictures = async () => {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        headers: myHeader,
      };

      try {
        const response = await fetch(
          "http://localhost:5000/Picture",
          requestOptions
        );
        const pictureList = await response.json();
        setPictures(pictureList);
      } catch (error) {
        navigate("/connexion");
      }
    };
    const fetchArtists = async () => {
      const myHeader = new Headers();
      myHeader.append("Authorization", `Bearer ${token}`);

      const requestOptions = {
        headers: myHeader,
      };

      try {
        const response = await fetch(
          // eslint-disable-next-line no-template-curly-in-string
          `http://localhost:5000/Artists/${pictures}`,
          requestOptions
        );
        const artistsList = await response.json();
        setArtists(artistsList);
        console.warn(artistsList);
      } catch (error) {
        navigate("/connexion");
      }
    };

    fetchArtists();
    fetchPictures();
  }, []); // only execute effect on mount

  // Map over the artists array and return a card for each item
  const pictureCards = pictures.map((picture) => {
    const mapArtists = artists.map((artist) => artist.artist_name);
    // Find the artists name that belongs to the current pictures
    const artistIndex = mapArtists[picture.id];

    return (
      <div
        key={picture.id}
        className=" m-3 bg-white w-[45%] h-[26vh] border-solid border-2 border-indigo-500/50 rounded-lg shadow-2xl shadow-[pink] mb-4"
      >
        <div className="flex justify-start m-2 items-center">
          <img
            src={Daryl}
            alt="Avatar"
            className="h-[2rem] w-[2rem] border-white rounded-full m-1"
          />
          {/* Find the artists that belongs to the current pictures */}
          <h2>{artistIndex}</h2>
        </div>
        <div className="flex justify-start items-center w-[100%] h-[50%] object-cover">
          <img
            className="w-[100%] h-[100%] object-cover"
            src={picture.Picture_url}
            alt="street art"
          />
        </div>
        <div className="flex justify-center items-center m-1">
          <p className="font-main-font m-1 text-sm">City</p>
          <div className="bg-localisation w-[10%] h-[2vh] bg-[#F2F2F2] rounded-lg" />
        </div>
      </div>
    );
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-main-font text-3xl">Galerie</h1>
        <div className="flex flex-space-around items-center">
          {pictureCards}
        </div>
      </div>
    </div>
  );
}

export default ArtistCardContainer;
