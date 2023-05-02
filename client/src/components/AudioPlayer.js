import "./AudioPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faForwardStep,
    faArrowRotateLeft,
    faArrowRotateRight,
    faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = () => {
    return (
        <div className="audio-player-banner">
            <img
                id="current-episode-img"
                src="https://play-lh.googleusercontent.com/O8mvDQlw4AwmGfUrh4lviZD_PwwhRHz2etA25F77SbXrm3qEHOt2826aNkKar4D0yw"
            />
            <div id="non-img-container">
                <div className="audio-player">
                    <h3 id="current-episode">Now playing: Episode</h3>
                    <section className="controls">
                        <FontAwesomeIcon icon={faBackwardStep} size="xl" />
                        <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
                        <FontAwesomeIcon icon={faCirclePlay} size="2xl" />
                        <FontAwesomeIcon icon={faArrowRotateRight} size="xl" />
                        <FontAwesomeIcon icon={faForwardStep} size="xl" />
                    </section>
                    <h4 id="current-episode-author">Author</h4>
                </div>
                <div id="description-container">
                    <p id="current-episode-description">
                        Episode Description Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;
