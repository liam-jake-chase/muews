import React from "react";
import "./Releases.scss";
import FooterNav from "../FooterNav/FooterNav";

export default function Releases(props) {
  return (
    <>
      <div className="releases">
        <img
          className="releases__banner"
          src={props.artistInfo.strArtistBanner}
          alt="main-banner"
        />
        <h1 className="releases__header">RELEASES</h1>
        <div className="releases__container">
          <div className="releases__flex-one">
            {props.artistReleases.map((albumTitle) => {
              return <h2 className="releases__title" key={albumTitle.idAlbum}>{albumTitle.strAlbum}</h2>;
            })}
          </div>
          <div className="releases__flex-two"></div>
         
          <div className="releases__flex-three"></div>
        </div>
        <footer className="results__footer-nav">
          <FooterNav />
        </footer>
      </div>
    </>
  );
}
