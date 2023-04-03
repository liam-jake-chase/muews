import React, { useContext } from "react";
import "./Releases.scss";
import { ArtistContext } from "../../../context/ArtistContext";

export default function Releases() {
  const [artistReleases, setArtistReleases] = useContext(ArtistContext);
  console.log(artistReleases)
  return (
    <>
      <div className="releases">
        <h1 className="releases__header">RELEASES</h1>
        <div className="releases__container">
          {artistReleases.map((albumTitle) => {
            <h2 className="releases__title">{albumTitle.strAlbum}</h2>;
          })}
        </div>
      </div>
    </>
  );
}
