import React from "react";
import "./ResultsPage.scss";
import FooterNav from "./FooterNav/FooterNav";
import Sidebar from "./Sidebar/Sidebar";


export default function ResultsPage(props) {
  return (
    <>
      <div className="results">
        <div className="results__banner-container">
          <img
            className="results__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
        </div>
        <div className="results__tabs-card-container">
          <div className="profile">
            <div className="profile__header-container">
              <Sidebar />
              <h1 className="profile__header">PROFILE</h1>
            </div>
            <div className="profile__container-one">
              <h2 className="profile__header-two profile__header-two__biography">
                BIOGRAPHY
              </h2>
              <div className="profile__biography">
                {props.artistInfo.strBiographyEN}
              </div>
              <div className="profile__bandinfo">
                <h2 className="profile__header-two">BAND MEMBERS</h2>
                <div className="profile__container-two">
                  <ul className="profile__memberlist">
                    {props.discogs.map((member) => {
                      return (
                        <li className="profile__member">
                          {member.name}
                          <img
                            className="profile__image"
                            src={member.thumbnail_url}
                            alt="member-thumb"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
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
