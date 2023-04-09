import React, { useState } from "react";
import YouTube from "react-youtube";
import './Media.scss'

export default function Player(props) {
  return <YouTube 
  videoId={props.videoURL} 
  iframeClassName="player"
  />;
}
