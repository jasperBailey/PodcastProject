import "./AudioContainer.css";
import { useState, useRef } from "react";
import AudioPlayer from "../components/AudioPlayer";
import ProgressBar from "../components/ProgressBar";

const AudioContainer = ({ nowPlaying }) => {
    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const progressBarRef = useRef();

    const audioRef = useRef();

    // audioElement.play();
    // audioElement.pause();
    // audioElement.currentTime;
    // audioElement.ended;
    // audioElement.duration;

    return (
        <div id="audio-player-banner">
            <ProgressBar />
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
                    <AudioPlayer nowPlaying={nowPlaying} audioRef={audioRef} />
                </div>
            </div>
        </div>
    );
};

export default AudioContainer;
