import "./AudioPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faForwardStep,
    faArrowRotateLeft,
    faArrowRotateRight,
    faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ({ nowPlaying }) => {
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
                        <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
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
