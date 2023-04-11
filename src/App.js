import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import ResultsPage from "./components/ResultsPage/ResultsPage";
import Releases from "./components/ResultsPage/Releases/Releases";
import axios from "axios";
import Modal from "react-awesome-modal";
import "./components/ResultsPage/ResultsPage.scss";
import Events from "./components/ResultsPage/Events/Events";
import Social from "./components/ResultsPage/Social/Social";
import Media from "./components/ResultsPage/Media/Media";
import Gallery from "./components/ResultsPage/Gallery/Gallery";

function App() {
  const [redirect, setRedirect] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [artistInfo, setArtistInfo] = useState([]);
  const [artistReleases, setArtistReleases] = useState([]);
  const [artistVideos, setArtistVideos] = useState([]);
  const [event, setEvent] = useState([]);
  const [visible, setVisible] = useState(false);
  const [discogs, setDiscogs] = useState([]);
  const [noData, setNoData] = useState(null);
  const [social, setSocial] = useState([]);
  const [images, setImages] = useState([]);

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
              if (response.data.album.strDescriptionEN === null) {
                setNoData("No Information Available");
              } else {
                setArtistReleases(response.data.album);
              }
              let getVideo = async () => {
                await axios
                  .get(
                    `https://theaudiodb.com/api/v1/json/523532/mvid.php?i=${num}`
                  )
                  .then((response) => {
                    let videoData = response.data.mvids;
                    console.log(videoData);
                    setArtistVideos(videoData);
                  });
              };
              getVideo();
            });
        };
        getRelease();
      });
  };

  const access = {
    headers: {
      Authorization: "Discogs token=xjzQTJrmKsrHlIVuXumMbGcqfPfLyYicQRqGDrvo",
    },
  };
  let getDiscogs = async () => {
    await axios
      .get(
        `https://api.discogs.com/database/search?q=${searchName}&artist&key=trndaRvgxPZeVGxKzXuo&secret=EfhONQaxMVYqTPCgrxkmCCmTJbVkLsjU`
      )
      .then((response) => {
        let artistName = response.data.results[0].id;
        let idSearch = async () => {
          await axios
            .get(`https://api.discogs.com/artists/${artistName}`, access)
            .then((response) => {
              console.log(response.data);
              setImages(response.data.images)
              setDiscogs(response.data.members);
              setSocial(response.data.urls);
            });
        };
        idSearch();
      });
  };

  const getEvent = () => {
    axios
      .get(
        `https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=2mitntFIkOiRSejzvu3iHKjtOC6AiuyB&keyword=${searchName}`
      )
      .then((response) => {
        setEvent(response.data._embedded.events);
      });
  };

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
    getDiscogs();
    getEvent();
    setRedirect(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Modal visible={visible} effect="fadeInDown">
          <div className="modal">
            <h1>Sorry!</h1>
            <h3>
              We were unable to get enough data for this musician or it was
              spelled incorrectly, please search again!
            </h3>
            <Link
              to="/muews"
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
            path="/muews"
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
            path="/profile"
            element={
              <ResultsPage
                artistInfo={artistInfo}
                discogs={discogs}
                searchName={searchName}
              />
            }
          />

          <Route
            exact
            path="/releases"
            element={
              <Releases
                artistInfo={artistInfo}
                artistReleases={artistReleases}
                noData={noData}
              />
            }
          />
          <Route
            exact
            path="/events"
            element={
              <Events artistInfo={artistInfo} noData={noData} event={event} />
            }
          />
           <Route
            exact
            path="/gallery"
            element={
              <Gallery artistInfo={artistInfo} images={images} />
            }
          />
          <Route
            exact
            path="/media"
            element={
              <Media
                artistInfo={artistInfo}
                artistVideos={artistVideos}
                searchName={searchName}
              />
            }
          />
          <Route
            exact
            path="/social"
            element={
              <Social
                artistInfo={artistInfo}
                social={social}
                searchName={searchName}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
