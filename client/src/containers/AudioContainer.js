import "./AudioContainer.css";
import { useState, useRef, useEffect } from "react";
import AudioPlayer from "../components/AudioPlayer";
import ProgressBar from "../components/ProgressBar";

const AudioContainer = ({ nowPlaying }) => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const progressBarRef = useRef();
    const audioRef = useRef();

    return (
        <div id="audio-player-banner">
            <ProgressBar audioRef={audioRef} progressBarRef={progressBarRef} />
            <div id="main-banner">
                <img
                    id="current-episode-img"
                    src={
                        nowPlaying
                            ? nowPlaying.imageUrl
                            : "https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
                    }
                />
                <div id="non-img-container">
                    <AudioPlayer
                        nowPlaying={nowPlaying}
                        audioRef={audioRef}
                        progressBarRef={progressBarRef}
                        setDuration={setDuration}
                        setTimeProgress={setTimeProgress}
                        duration={duration}
                    />
                </div>
            </div>
        </div>
    );
};

export default AudioContainer;
