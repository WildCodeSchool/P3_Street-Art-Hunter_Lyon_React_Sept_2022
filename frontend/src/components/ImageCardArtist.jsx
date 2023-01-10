import React from "react";

function ImageCardArtist(props) {
  const { pictures } = props;

  return (
    <div className="flex justify-center">
      <img src={pictures} alt="street art" />
    </div>
  );
}

export default ImageCardArtist;
