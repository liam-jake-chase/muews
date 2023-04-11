import React from "react";
import "./Gallery.scss";
import FooterNav from "../FooterNav/FooterNav";

export default function Gallery(props) {
  return (
    <>
      <section className="gallery">
        <div className="gallery__banner-container">
          <img
            className="gallery__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
        </div>
        <h1 className="gallery__header">GALLERY</h1>
        <div className="gallery__container">
          <div className="gallery__image-big"></div>
          <div className="gallery__grid">
            <img
              className="gallery__image"
              src={props.images[0].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[1].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[2].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[3].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[4].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[5].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[6].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[7].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[8].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[9].uri}
              alt="gallery"
            />
            <img
              className="gallery__image"
              src={props.images[10].uri}
              alt="gallery"
            />
          </div>
        </div>
      </section>
      <footer className="results__footer-nav">
        <FooterNav />
      </footer>
    </>
  );
}
