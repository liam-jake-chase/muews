import React from "react";
import { Link } from "react-admin";
import "./FooterNav.scss";

export default function FooterNav() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__li">
            <a href="/muews">Search</a>
          </li>
          <li className="footer__li">
            <Link className="footer__link" to="/profile">Profile</Link>
          </li>
          <li className="footer__li">
            <Link className="footer__link" to="/releases">Releases</Link>
          </li>
          <li className="footer__li">
            <Link className="footer__link" to="/events">Events</Link>
          </li>
          <li className="footer__li">
            <Link className="footer__link" to="/media">Media</Link>
          </li>
          <li className="footer__li">
            <Link className="footer__link" to="/social">Social</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
