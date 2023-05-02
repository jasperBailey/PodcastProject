import styled from "styled-components";
import "./FavPodcast.css";
import * as React from "react";
import { Link } from "react-router-dom";

const FavPodcast = ({ podcast, removeFavourite, handleOnClick }) => {
    const handleButtonClick = () => {
        removeFavourite(podcast.uuid);
    };

    return (
        <div className="podcastList-body">
            <StyledImg src={podcast.imageUrl}></StyledImg>
            <Link to={`/series/${podcast.uuid}`}>
                <h4>{podcast.name}</h4>
            </Link>
            <button className="deleteButton" onClick={handleButtonClick}>
                Remove
            </button>
        </div>
    );
};
export default FavPodcast;
export const StyledImg = styled.img`
    width: 100px;
    height: 100px;
`;
