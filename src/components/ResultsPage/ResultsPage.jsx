import React from "react";
import "./ResultsPage.scss";
import { motion } from "framer-motion";
import ResultsTabsCard from "../ResultsTabsCard/ResultsTabsCard";

export default function ResultsPage(props) {

  return (
    <motion.div>
      <div className="results">
        <div className="results__container">
          <img
            className="results__banner"
            src={props.artistInfo.strArtistBanner}
            alt="main-banner"
          />
          <div className="results__tabs-card-container">
            <ResultsTabsCard
              artistInfo={props.artistInfo}
           
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
