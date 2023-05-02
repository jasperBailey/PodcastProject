import styled from "styled-components";
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
            <DeletButton className="deleteButton" onClick={handleButtonClick}>
                Remove
            </DeletButton>
        </div>
    );
};
export default FavPodcast;
export const StyledImg = styled.img`
    width: 100px;
    height: 100px;
`;

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
  background-color: red;
  height: 20px;
`
