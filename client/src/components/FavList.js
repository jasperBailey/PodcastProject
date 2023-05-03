import FavPodcast from "./FavPodcast";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const FavList = ({ podcastsData, removeFavourite, handleOnClick }) => {
  return (
    <>
      <StyledDiv1 className="pods-body">
        <StyledDiv2 className="pod-body">
          {podcastsData.map((podcastData, index) => {
            return (
              <FavPodcast
                podcast={podcastData}
                key={index}
                removeFavourite={removeFavourite}
                handleOnClick={handleOnClick}
              />
            );
          })}
        </StyledDiv2>
      </StyledDiv1>
    </>
  );
};

export default FavList;

export const StyledDiv1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 225px;
  justify-content: center;
  margin-left: 60px;
  margin-bottom: 22px;
  margin-top: 80px;
`;
export const StyledDiv2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin: 10px;
  gap: 118px;
`;