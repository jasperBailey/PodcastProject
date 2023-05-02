import styled from "styled-components";

const Podcast = ({ podcast, addFavourite }) => {
  // const handleButtonClick = () => {
  //   removeFavourite(podcast.uuid);
  // };

  return (
    <>
      <div className="searchedPod-body">
        <StyledImg src={podcast.imageUrl}></StyledImg>
        <h4>{podcast.name}</h4>
        <button className="deleteButton">Add</button>
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
