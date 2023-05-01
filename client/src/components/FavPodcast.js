import styled from "styled-components";
import "./FavPodcast.css";
import * as React from "react";
import { Link } from "react-router-dom";

const FavPodcast = ({ podcast, removeFavourite, handleOnClick }) => {
  const handleButtonClick = () => {
    removeFavourite(podcast.uuid);
  };

  return (
    <>
      <div className="podcastList-body">
        <StyledImg src={podcast.imageUrl}></StyledImg>
        <Link to={"/episode"}>
          <h4 onClick={() => handleOnClick(podcast)}>{podcast.name}</h4>
        </Link>
        <button className="deleteButton" onClick={handleButtonClick}>
          Remove
        </button>
      </div>
      {/* add onclick to bring to this selected podcast to see more details: discription, episodes etc. */}
    </>
  );
};
export default FavPodcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
