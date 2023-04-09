import React from "react";
import "./Media.scss";
import FooterNav from "../FooterNav/FooterNav";

export default function Media(props) {
  return (
    <>
      <section className="media">
        <div className="media__banner-container">
          <img
            className="media__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
        </div>
        <h1 className="events__header">MEDIA</h1>
      </section>

      <footer className="results__footer-nav">
        <FooterNav />
      </footer>
    </>
  );
}
