import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faForwardStep,
    faArrowRotateLeft,
    faArrowRotateRight,
    faCirclePlay,
    faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef, useCallback } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({
    nowPlaying,
    audioRef,
    progressBarRef
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playAnimationRef = useRef();

    const onLoadedMetadata = () => {
        playAnimationRef.current = requestAnimationFrame(repeat)
    }

    const togglePlayPause = () => {
        console.log(`setting isPlaying to ${!isPlaying}`);
        setIsPlaying(!isPlaying);
    };

    const repeat = useCallback(() => {
        progressBarRef.current.style.setProperty(
            "width",
            `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`
        );
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, []);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (nowPlaying) {
            audioRef.src = nowPlaying.audioUrl;
        }
    }, [nowPlaying]);

    return (
        <div className="audio-player">
            <audio
                src={nowPlaying ? nowPlaying.audioUrl : null}
                ref={audioRef}
                onLoadedMetadata={onLoadedMetadata}
            />
            <h3 id="current-episode">
                Now playing:{" "}
                {nowPlaying ? nowPlaying.name : "No episode selected!"}
            </h3>
            <section className="controls">
                <FontAwesomeIcon icon={faBackwardStep} size="xl" />
                <FontAwesomeIcon icon={faArrowRotateLeft} size="xl" />
                <FontAwesomeIcon
                    onClick={togglePlayPause}
                    icon={isPlaying ? faCirclePause : faCirclePlay}
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
