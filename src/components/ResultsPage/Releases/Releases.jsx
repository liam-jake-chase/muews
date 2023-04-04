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
          {/* {props.artistReleases.map((albumTitle) => {
            return <h2 className="releases__title">{albumTitle.strAlbum}</h2>;
          })} */}
        </div>
        <footer className="results__footer-nav">
          <FooterNav />
        </footer>
      </div>
    </>
  );
}
