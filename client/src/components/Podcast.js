import { useState } from "react";
import styled from "styled-components";

const Podcast = ({ podcast, addToFavourite }) => {
  const [subsButtonMsg, setSubsButtonMsg] = useState("subscribe");
  const handleClickButton = (podcast) => {
    addToFavourite(podcast);
    setSubsButtonMsg("subscribed");
  };

  return (
    <>
      <div className="searchedPod-body">
        <StyledImg src={podcast.imageUrl}></StyledImg>
        <h4>{podcast.name}</h4>
        <button
          className="deleteButton"
          onClick={() => handleClickButton(podcast)}
        >
          {subsButtonMsg}
        </button>
      </div>
    </>
  );
};
export default Podcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
