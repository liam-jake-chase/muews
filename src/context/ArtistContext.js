import { useState, createContext } from "react";

export const ArtistContext = createContext();

const ArtistProvider = (props) => {
    const [discogs, setDiscogs] = useState([]);

    return (
        <ArtistContext.Provider value={[discogs, setDiscogs]}>
            {props.children}
        </ArtistContext.Provider>
    );
};

export default ArtistProvider;