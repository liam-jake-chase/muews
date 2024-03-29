import React from "react";
import "./Social.scss";
import FooterNav from "../FooterNav/FooterNav";
import facebook from "../../../assets/Icon-facebook.svg";
import twitter from "../../../assets/Icon-twitter.svg";
import instagram from "../../../assets/Icon-instagram.svg";
import globe from "../../../assets/globe.png";

export default function Social(props) {
  const nameSplit = props.searchName.split(" ");
  const nameJoin = nameSplit.join("");
  const facebookURL = `https://www.facebook.com/${nameJoin}`;
  const twitterURL = `https://www.twitter.com/${nameJoin}`;
  const instagramURL = `https://www.instagram.com/${nameJoin}`;

  return (
    <>
      <section className="social">
        <div className="social__banner-container">
          <img
            className="social__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
        </div>
        <h1 className="social__header">SOCIAL MEDIA</h1>
        <div className="social__container">
          <ul className="social__items">
            <a
              className="social__link"
              href={facebookURL}
              target="_blank"
              rel="noreferrer"
            >
              <li className="social__item">
                <img
                  className="social__image social__image__facebook"
                  src={facebook}
                  alt="facebook"
                />
              </li>
            </a>
            <a
              className="social__link"
              href={twitterURL}
              target="_blank"
              rel="noreferrer"
            >
              <li className="social__item">
                <img className="social__image" src={twitter} alt="twitter" />
              </li>
            </a>
            <a
              className="social__link"
              href={instagramURL}
              target="_blank"
              rel="noreferrer"
            >
              <li className="social__item">
                <img
                  className="social__image social__image__instagram"
                  src={instagram}
                  alt="instagram"
                />
              </li>
            </a>
            <a
              className="social__link"
              href={props.social[0]}
              target="_blank"
              rel="noreferrer"
            >
              <li className="social__item ">
                <img
                  className="social__image social__image__globe"
                  src={globe}
                  alt="website"
                />
              </li>
            </a>
          </ul>
        </div>
      </section>
      <footer className="results__footer-nav">
        <FooterNav />
      </footer>
    </>
  );
}
