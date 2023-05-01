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
  margin-right: 50px;
  padding-top: 100px;
  padding-left: 150px;
  display: flex;
  flex-wrap: wrap;
  padding-right: 150px;
`;
export const StyledDiv2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;
