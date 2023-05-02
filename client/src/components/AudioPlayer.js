import "./AudioPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faForwardStep,
    faArrowRotateLeft,
    faArrowRotateRight,
    faCirclePlay,
    faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const AudioPlayer = ({ nowPlaying }) => {
    const [isPlaying, setIsPlaying] = useState(false)

    const audioElement = new Audio()
    if (nowPlaying) {
        audioElement.src = nowPlaying.audioUrl
    }

    // audioElement.currentTime;
    // audioElement.ended;
    // audioElement.duration;

    const handleTogglePlay = () => {
        if(audioElement.paused) {
            setIsPlaying(true)
            audioElement.play()
            console.log("starting audio")

        } else {
            setIsPlaying(false)
            audioElement.pause()
            console.log("stopping audio")
        }
    };

    console.log(audioElement.paused)

    return (
        <div className="audio-player-banner">
            <img
                id="current-episode-img"
                src={
                    nowPlaying
                        ? nowPlaying.imageUrl
                        : "https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
                }
            />
            <div id="non-img-container">
                <div className="audio-player">
                    <h3 id="current-episode">
                        Now playing:{" "}
                        {nowPlaying ? nowPlaying.name : "No episode selected!"}
                    </h3>
                    <section className="controls">
                        <FontAwesomeIcon icon={faBackwardStep} size="xl" />
                        <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
                        <FontAwesomeIcon
                            onClick={handleTogglePlay}
                            icon={audioElement.paused ? faCirclePlay : faCirclePause}
                            size="2xl"
                        />
                        <FontAwesomeIcon icon={faArrowRotateRight} size="xl" />
                        <FontAwesomeIcon icon={faForwardStep} size="xl" />
                    </section>
                    <h4 id="current-episode-author">
                        {nowPlaying ? nowPlaying.series : "No series"}
                    </h4>
                </div>
                <div id="description-container">
                    <p id="current-episode-description">
                        {nowPlaying ? nowPlaying.description : " "}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
