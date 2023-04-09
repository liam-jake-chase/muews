import React, { useState } from "react";
import "./Media.scss";
import FooterNav from "../FooterNav/FooterNav";
import Player from "./Player";

export default function Media(props) {
  const [videoURL, setVideoURL] = useState(undefined);

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
        <h1 className="media__header">MEDIA</h1>
        <div className="media__container">
          <div className="media__flex-one">
            <Player videoURL={videoURL} />
          </div>
          <div className="media__flex-two">
            <div className="media__videos">
              <ul className="media__videolist">
                {props.artistVideos.map((video) => {
                  let splitString = JSON.stringify(video.strMusicVid)
                    .split("v=")[1]
                    .substring(0, 11);
                  return (
                    <li className="">
                      <button
                        onClick={() => setVideoURL(splitString)}
                        className="media__videoitem"
                      >
                        <img
                          className="media__thumb"
                          src={video.strTrackThumb}
                          alt={video.idTrack}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="results__footer-nav">
        <FooterNav />
      </footer>
    </>
  );
}
