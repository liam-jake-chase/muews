import React from "react";
import { Link } from "react-admin";
import "./FooterNav.scss";

export default function FooterNav() {
  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
            <Link className="footer__link" to="/profile">
          <li className="footer__li">
              Profile
          </li>
            </Link>
            <Link className="footer__link" to="/releases">
          <li className="footer__li">
              Releases
          </li>
            </Link>
            <Link className="footer__link" to="/events">
          <li className="footer__li">
              Events
          </li>
            </Link>
            <Link className="footer__link" to="/gallery">
          <li className="footer__li">
              Gallery
          </li>
            </Link>
            <Link className="footer__link" to="/media">
          <li className="footer__li">
              Media
          </li>
            </Link>
            <Link className="footer__link" to="/social">
          <li className="footer__li">
              Social
          </li>
            </Link>
            <a className="footer__link" href="/muews">
          <li className="footer__li">
          Search
          </li></a>
        </ul>
      </nav>
    </div>
  );
}
