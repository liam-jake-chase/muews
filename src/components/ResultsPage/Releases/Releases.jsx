import React from "react";
import "./Releases.scss";
import FooterNav from "../FooterNav/FooterNav";
import { useState, useEffect } from "react";
import axios from "axios";


export default function Releases(props) {
  const [albumID, setAlbumID] = useState(undefined);
  const [albumImage, setAlbumImage] = useState(undefined);
  const [albumInfo, setAlbumInfo] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://theaudiodb.com/api/v1/json/2/album.php?m=${albumID}`)
      .then((response) => {
        console.log(response.data.album[0].strAlbumThumb);
        setAlbumImage(response.data.album[0].strAlbumThumb);
        setAlbumInfo(response.data.album[0].strDescriptionEN);
      });
  });

  return (
    <>
      <div className="releases">
        <div className="releases__banner-container">  
          <img
            className="releases__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
        </div>
        <h1 className="releases__header">RELEASES</h1>
        <div className="releases__container">
          <div className="releases__flex-one active">
      
            <h2 className="releases__header">Album</h2>
            {props.artistReleases.map((albumTitle, index) => {
              return (
                <li>
                  <button
                    id="button"
                    className="releases__title"
                    onClick={() => {
                      setAlbumID(albumTitle.idAlbum);
                      window.onload = function () {
                        document.getElementById("button").click();
                      };
                    }}
                    key={index}
                  >
                    {albumTitle.strAlbum}
                  </button>
                </li>
              );
            })}
          </div>
          <div className="releases__flex-two">
            <h2 className="releases__header-two">Album Cover</h2>
            <img
              className="releases__image-thumb"
              src={albumImage}
              alt={albumID}
            />
          </div>

          <div className="releases__flex-three">
            <h2 className="releases__header-two">Description</h2>
            <p className="releases__description">{albumInfo}</p>
          </div>
        </div>
        <footer className="results__footer-nav">
          <FooterNav />
        </footer>
      </div>
    </>
  );
}
