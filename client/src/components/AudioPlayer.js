import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faForwardStep,
    faArrowRotateLeft,
    faArrowRotateRight,
    faCirclePlay,
    faCirclePause,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import "./AudioPlayer.css";

const AudioPlayer = ({ nowPlaying, audioRef }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    useEffect(() => {
        if (isPlaying) {
            console.log("playing!");
            audioRef.current.play();
        } else {
            console.log("stopping!");
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        if (nowPlaying) {
            console.log(`changing src to ${nowPlaying.audioUrl}`);
            audioRef.src = nowPlaying.audioUrl;
            audioRef.current.load();
            setIsPlaying(true)
        }
    }, [nowPlaying]);

    //logging
    if (audioRef.current) {
        console.log(audioRef.current.src);
        console.log(audioRef.current.paused);
    }
    /////////

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
                    icon={
                        audioRef.current && audioRef.current.paused
                            ? faCirclePause
                            : faCirclePlay
                    }
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
