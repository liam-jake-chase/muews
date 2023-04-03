import React from "react";
import "./Profile.scss";

export default function Profile(props) {
  return (
    <>
      <div className="profile">
        <h1 className="profile__header">BIOGRAPHY</h1>
        <div className="profile__biography">
          {props.artistInfo.strBiographyEN}
        </div>
        <div className="profile__bandinfo">
          <h2 className="profile__header">BAND MEMBERS</h2>

          <div className="profile__container">
            {/* <ul className="profile__memberlist">
              {props.discogs.map((member) => {
                return <li className="profile__member">{member.name}</li>;
              })}
            </ul> */}
            <ul className="profile__imagelist">
              {props.discogs.map((image) => {
                return (
                  <img
                    className="profile__image"
                    src={image.thumbnail_url}
                    alt="member-thumb"
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
