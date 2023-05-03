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
    progressBarRef,
    setDuration,
    duration,
    setTimeProgress,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const playAnimationRef = useRef();

    const repeat = useCallback(() => {
        if (audioRef.current.paused) {
            return;
        }
        console.log("repeat");
        const currentTime = audioRef.current.currentTime;
        setTimeProgress(currentTime);
        progressBarRef.current.value = currentTime;
        progressBarRef.current.style.setProperty(
            "width",
            `${(progressBarRef.current.value / duration) * 100}%`
        );
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [audioRef, duration, progressBarRef, setTimeProgress]);

    useEffect(() => {
        if (isPlaying) {
            console.log("playing!");
            audioRef.current.play();
            setDuration(audioRef.current.duration);
        } else {
            console.log("stopping!");
            audioRef.current.pause();
        }
        playAnimationRef.current = requestAnimationFrame(repeat);
    }, [isPlaying]);

    useEffect(() => {
        if (nowPlaying) {
            console.log(`changing src to ${nowPlaying.audioUrl}`);
            audioRef.src = nowPlaying.audioUrl;
            audioRef.current.load();
            setIsPlaying(true);
            playAnimationRef.current = requestAnimationFrame(repeat);
        }
    }, [nowPlaying]);

    return (
        <div className="audio-player">
            <audio
                src={nowPlaying ? nowPlaying.audioUrl : null}
                ref={audioRef}
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
