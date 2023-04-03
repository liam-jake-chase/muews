import React from "react";
import "./Profile.scss";

export default function Profile(props) {
  return (
    <>
      <div className="profile">
        <div className="profile__bandinfo">
            
        </div>
        <div className="profile__biography">
          {props.artistInfo.strBiographyEN}
        </div>
      </div>
    </>
  );
}
