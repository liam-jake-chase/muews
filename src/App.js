import "./App.css";
import React, { useState } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import axios from "axios";
import Modal from "react-awesome-modal";

function App() {
  const [redirect, setRedirect] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [artistInfo, setArtistInfo] = useState([]);
  const [artistReleases, setArtistReleases] = useState([]);
  const [artistVideos, setArtistVideos] = useState([]);
  const [visible, setVisible] = useState(false);


 const openModal = () => {
    setVisible(true)
   
  }

  const closeModal = () => {
   setVisible(false);
  }

  let getData = () => {
    axios
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
        let getRelease = () => {
          axios
            .get(`https://theaudiodb.com/api/v1/json/523532/album.php?i=${num}`)
            .then((response) => {
              console.log(response);
              setArtistReleases(response.data.album);
              let getVideo = async () => {
                axios
                  .get(
                    `https://theaudiodb.com/api/v1/json/523532/mvid.php?i=${num}`
                  )
                  .then((response) => {
                    let videoData = response.data.mvids;
                    console.log(videoData);
                    setArtistVideos(artistVideos && artistVideos);
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

  return (
    <div className="App">
      <BrowserRouter>
      <Modal visible={visible} effect="fadeInDown">
            <div className="modal">
              <h1>Sorry!</h1>
              <h3>
                We were unable to get enough data for this musician, please
                search again!
              </h3>
              <Link
                to="/"
                className="modal__button"
                onClick={() => closeModal()}
              >
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
          <Route path="/ResultsPage" element={<ResultsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
