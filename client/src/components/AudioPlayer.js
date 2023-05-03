import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faForwardStep,
    faArrowRotateLeft,
    faArrowRotateRight,
    faCirclePlay,
    faCirclePause,
} from "@fortawesome/free-solid-svg-icons";

const AudioPlayer = ( {nowPlaying, audioRef} ) => {
    return (
        <div className="audio-player">
            <audio ref={audioRef} />
            <h3 id="current-episode">
                Now playing:{" "}
                {nowPlaying ? nowPlaying.name : "No episode selected!"}
            </h3>
            <section className="controls">
                <FontAwesomeIcon icon={faBackwardStep} size="xl" />
                <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
                <FontAwesomeIcon
                    // onClick={handleTogglePlay}
                    //icon={audioRef.current.paused ? faCirclePlay : faCirclePause}
                    icon={faCirclePlay}
                    size="2xl"
                />
                <FontAwesomeIcon icon={faArrowRotateRight} size="xl" />
                <FontAwesomeIcon icon={faForwardStep} size="xl" />
            </section>
            <h4 id="current-episode-author">
                {nowPlaying ? nowPlaying.series : "No series"}
            </h4>
        </div>
    );
};

export default AudioPlayer;
