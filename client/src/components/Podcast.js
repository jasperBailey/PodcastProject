import styled from "styled-components";
import "./Podcast.css";

const Podcast = ({ podcast, removeFavourite }) => {
  const handleButtonClick = () => {
    removeFavourite(podcast.uuid);
  };


  return (
    <>
      <div className="podcastList-body">
        <StyledImg src={podcast.imageUrl}></StyledImg>
        <h4>
          {podcast.name}{" "}
        </h4>
        <button className="deleteButton" onClick={handleButtonClick}>Remove</button>
        </div>
        {/* add onclick to bring to this selected podcast to see more details: discription, episodes etc. */}
    </>
  );
};
export default Podcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;