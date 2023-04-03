import "./App.css";
import React, { useState, useContext } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import axios from "axios";
import Modal from "react-awesome-modal";
import { ArtistContext } from "./context/ArtistContext";

function App() {
  const [redirect, setRedirect] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [artistInfo, setArtistInfo] = useState([]);
  const [artistReleases, setArtistReleases] = useState([]);
  const [artistVideos, setArtistVideos] = useState([]);
  const [visible, setVisible] = useState(false);
  const [discogs, setDiscogs] = useContext(ArtistContext);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  let getData = async () => {
    await axios
      .get(
        `https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${searchName}`
      )
      .then((response) => {
        console.log(response);
        if (response.data.artists === null) {
          setRedirect(false);
          openModal();
        } else {
          setArtistInfo(response.data.artists[0]);
        }
        let num = response.data.artists[0].idArtist;
        let getRelease = async () => {
          await axios
            .get(`https://theaudiodb.com/api/v1/json/523532/album.php?i=${num}`)
            .then((response) => {
              console.log(response);
              setArtistReleases(response.data.album);
              let getVideo = async () => {
                await axios
                  .get(
                    `https://theaudiodb.com/api/v1/json/523532/mvid.php?i=${num}`
                  )
                  .then((response) => {
                    let videoData = response.data.mvids;
                    console.log(videoData);
                    setArtistVideos(artistVideos && artistVideos);
                    const access = {
                      headers: {
                        Authorization:
                          "Discogs key=trndaRvgxPZeVGxKzXuo, secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU",
                      },
                    };
                    let discogs = async () => {
                      await axios
                        .get(
                          `https://api.discogs.com/database/search?q=${searchName}&artist&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU`
                        )
                        .then((response) => {
                          let artistName = response.data.results[0].id;
                          let idSearch = async () => {
                            await axios
                              .get(
                                `https://api.discogs.com/artists/${artistName}`,
                                access
                              )
                              .then((response) => {
                                console.log(response.data.members);
                                setDiscogs(response.data.members);
                              });
                          };
                          idSearch();
                        });
                    };
                    discogs();
                  });
              };
              getVideo();
            });
        };
        getRelease();
      });
  };

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    setRedirect(true);
  };

  console.log(discogs);

  return (
    <div className="App">
      <BrowserRouter>
        <Modal visible={visible} effect="fadeInDown">
          <div className="modal">
            <h1>Sorry!</h1>
            <h3>
              We were unable to get enough data for this musician, please search
              again!
            </h3>
            <Link to="/" className="modal__button" onClick={() => closeModal()}>
              Close
            </Link>
          </div>
        </Modal>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <HeroSection
                handleSearchName={handleSearchName}
                handleSubmit={handleSubmit}
                redirect={redirect}
                setRedirect={setRedirect}
                artistInfo={artistInfo}
                artistReleases={artistReleases}
                artistVideos={artistVideos}
              />
            }
          />
          <Route
            path="/ResultsPage"
            element={<ResultsPage artistInfo={artistInfo} discogs={discogs} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
