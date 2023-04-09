import React from "react";
import { Link } from "react-admin";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.scss";

export default function Sidebar(props) {
  const showSettings = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Menu>
      <p>MENU</p>
        <Link id="home" className="menu-item" to="/muews">
          Search
        </Link>
        <Link id="about" className="menu-item" href="/about">
          Profile
        </Link>
        <Link id="contact" className="menu-item" href="/contact">
          Releases
        </Link>
        <br></br>
        <Link onClick={showSettings} className="menu-item--small" href="">
          Settings
        </Link>
      </Menu>
    </>
  );
}
