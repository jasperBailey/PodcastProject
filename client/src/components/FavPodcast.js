import { useEffect, useState } from "react";
import { getPodSeries } from "../services/APIService";
import { Link, useNavigate } from "react-router-dom";
import Episode from "./Episode";
import styled from "styled-components";

const FavPodcast = ({ podcast, removeFavourite }) => {
  // const navigate = useNavigate()

  const handleButtonClick = () => {
    removeFavourite(podcast.uuid)
  };

  return (
    <>
      <div className="podcastList-body">
        <StyledImg src={podcast.imageUrl}></StyledImg>
        <h4>
          {podcast.name}{" "}
          <button onClick={handleButtonClick}>Remove</button>
        </h4>
        {/* add onclick to bring to this selected podcast to see more details: discription, episodes etc. */}
      </div>
      {/* <div className="episode-body">
        {episodes.length === 0 ? (
          <Episode
            podcastName={podcastData.name}
            podcastDes={podcastData.description}
            episodes={episodes}
          />
        ) : null}
      </div> */}
    </>
  );
};
export default FavPodcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
