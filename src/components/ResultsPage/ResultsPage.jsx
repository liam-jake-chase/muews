import React from "react";
import "./ResultsPage.scss";
import Profile from "./Profile/Profile";
import FooterNav from "./FooterNav/FooterNav";


export default function ResultsPage(props) {

  return (  
      <div className="results">
        <div className="results__container">
          <img
            className="results__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
          <div className="results__tabs-card-container">
            <Profile
              artistInfo={props.artistInfo}
              discogs={props.discogs}
            />
          </div>
          <footer className="results__footer-nav">
            <FooterNav />
          </footer>
        </div>
      </div>

  );
}
