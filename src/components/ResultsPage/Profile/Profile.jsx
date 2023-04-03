import React, {useContext} from "react";
import { ArtistContext } from "../../../context/ArtistContext";
import "./Profile.scss";

export default function Profile(props) {
  const [discogs, setDiscogs] = useContext(ArtistContext);
  return (
    <>
    <div>
      {/* <div className="profile"> */}
        {/* <div className="profile__bandinfo"> */}
          <ul className="profile__memberlist">
            {discogs.map((member) => {
                return <li className="profile__member">{member.name}</li>;
              })}
          </ul>
        </div>
        <div className="profile__biography">
          {props.artistInfo.strBiographyEN}
        </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}
