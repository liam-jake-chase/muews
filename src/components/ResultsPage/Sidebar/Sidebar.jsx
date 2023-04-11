import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-admin";
import "./Sidebar.scss";

export default function Sidebar(props) {
  return (
    <>
      <Menu>
        <p>MENU</p>
        <div className="menu-item">
          <Link id="about" className="menu-item" to="/profile">
            Profile
          </Link>
        </div>
        <div className="menu-item">
          <Link id="contact" className="menu-item" to="/releases">
            Releases
          </Link>
        </div>
        <div className="menu-item">
          <Link id="contact" className="menu-item" to="/events">
            Events
          </Link>
        </div>
        <div className="menu-item">
          <Link id="contact" className="menu-item" to="/gallery">
            Gallery
          </Link>
        </div>
        <div className="menu-item">
          <Link id="contact" className="menu-item" to="/media">
            Media
          </Link>
        </div>

        <a id="home" className="menu-item" href="/muews">
          Search
        </a>
      </Menu>
    </>
  );
}
