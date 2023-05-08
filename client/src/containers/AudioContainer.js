import "./AudioContainer.css";
import { useRef } from "react";
import AudioPlayer from "../components/AudioPlayer";
import ProgressBar from "../components/ProgressBar";

const AudioContainer = ({ nowPlaying }) => {
  const progressBarRef = useRef();
  const audioRef = useRef();

  return (
    <div id="audio-player-banner">
      <ProgressBar progressBarRef={progressBarRef} />
      <div id="main-banner">
        <img
          id="current-episode-img"
          src={
            nowPlaying
              ? nowPlaying.imageUrl
              : "https://thumbs.dreamstime.com/b/cute-cat-portrait-square-photo-beautiful-white-closeup-105311158.jpg"
          }
        />
        <div id="non-img-container">
          <AudioPlayer
            nowPlaying={nowPlaying}
            audioRef={audioRef}
            progressBarRef={progressBarRef}
          />
        </div>
      </div>
    </div>
  );
};

export default AudioContainer;
