import React from "react";
import { Link } from "react-admin";
import "./FooterNav.scss";

export default function FooterNav() {
  return (
    <div className="footer">
      <nav className="footer__nav">
        <ul className="footer__ul">
          <li className="footer__li">
            <Link to="/profile">Profile</Link>
          </li>
          <li className="footer__li">
            <Link to="/releases">Releases</Link>
          </li>
          <li className="footer__li">
            <Link to="/events">Events</Link>
          </li>
          <li className="footer__li">
            <Link to="/media">Media</Link>
          </li>
          <li className="footer__li">
            <Link to="/social">Social</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
