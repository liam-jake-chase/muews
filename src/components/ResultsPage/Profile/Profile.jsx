import React, { useContext } from "react";
import { ArtistContext } from "../../../context/ArtistContext";
import "./Profile.scss";

export default function Profile(props) {
  const [discogs] = useContext(ArtistContext);
  return (
    <>
      <div className="profile">
        <div className="profile__header">BIOGRAPHY</div>
        <div className="profile__biography">
          {props.artistInfo.strBiographyEN}
        </div>
        <div className="profile__bandinfo">
          BAND MEMBERS
          <ul className="profile__memberlist">
            {discogs.map((member) => {
              return <li className="profile__member">{member.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
