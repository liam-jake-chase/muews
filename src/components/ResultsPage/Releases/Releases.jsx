import React from "react";
import "./Releases.scss";
import FooterNav from "../FooterNav/FooterNav";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Releases(props) {
  const [albumID, setAlbumID] = useState(undefined);
  const [albumImage, setAlbumImage] = useState(undefined);
  const [albumInfo, setAlbumInfo] = useState(undefined);
  const [style, setStyle] = useState("arrow");

  useEffect(() => {
    axios
      .get(`https://theaudiodb.com/api/v1/json/523532/album.php?m=${albumID}`)
      .then((response) => {
        console.log(response.data.album[0].strAlbumThumb);
        setAlbumImage(response.data.album[0].strAlbumThumb);
        setAlbumInfo(response.data.album[0].strDescriptionEN);
      });
  });

  let description =
    albumInfo === undefined ? (
      <p className="releases__noInfo releases__noInfo__description">
        No Information Available
      </p>
    ) : (
      albumInfo
    );
  let setImage =
    albumImage === undefined ? (
      <p className="releases__noInfo releases__noInfo__album-cover">
        Please select an album!
      </p>
    ) : (
      albumImage && (
        <p hidden className="releases__noInfo releases__noInfo__album-cover">
          Please click on an album!
        </p>
      )
    );

  const changeStyle = () => {
    setStyle("arrow-hidden");
  };

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
            <h2 className="releases__header-two releases__header-two__album">
              Album
            </h2>
            <ul className="releases__list">
              {props.artistReleases.map((albumTitle, index) => {
                return (
                  <li onClick={changeStyle}>
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
            </ul>
          </div>
          <div className="releases__flex-two">
            <h2 className="releases__header-two">Album Cover</h2>
            <div className="releases__flex-arrow">
              <div className={style}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="releases__setImage">{setImage}</div>
            </div>
            <img
              className="releases__image-thumb"
              src={albumImage}
              alt={albumID}
            />
          </div>

          <div className="releases__flex-three">
            <div className="releases__container-two">
              <h2 className="releases__header-two">Description</h2>
              <p className="releases__description">{description}</p>
            </div>
          </div>
        </div>
        <footer className="results__footer-nav">
          <FooterNav />
        </footer>
      </div>
    </>
  );
}
