import styled from "styled-components";
import * as React from "react";

import Podcast from "./Podcast";

const FavPodcast = ({ podcast, removeFavourite }) => {
  const handleButtonClick = () => {
    removeFavourite(podcast.uuid);
  };

  return (
    <div className="podcastList-body">
      <Podcast podcast={podcast} />
      <FavPodcastBox>
        <DeletButton className="deleteButton" onClick={handleButtonClick}>
          Remove
        </DeletButton>
      </FavPodcastBox>
    </div>
  );
};
export default FavPodcast;

export const DeletButton = styled.div`
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  border-radius: 500px;
  transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s;
  border: 1px solid transparent;
  letter-spacing: 2px;
  min-width: 80px;
  text-transform: uppercase;
  white-space: normal;
  font-weight: 500;
  text-align: center;
  padding: 10px 15px;
  color: #fff;
  background-color: black;
  height: 15px;
`;

export const FavPodcastBox = styled.div`
  color: red;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;
