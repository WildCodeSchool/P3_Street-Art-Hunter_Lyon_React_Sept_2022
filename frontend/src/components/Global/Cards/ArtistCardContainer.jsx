import React from "react";
import ArtistTitleCard from "./ArtistTitleCard";
import ImageCardArtist from "./ImageCardArtist";
import BottomCardArtist from "./BottomCardArtist";

function ArtistCardContainer({ work }) {
  return (
    <div className="bg-white w-[45%] h-[26vh] rounded-lg shadow-2xl shadow-[pink] mb-4">
      <ArtistTitleCard work={work} />
      <ImageCardArtist work={work} />
      <BottomCardArtist />
    </div>
  );
}

export default ArtistCardContainer;
