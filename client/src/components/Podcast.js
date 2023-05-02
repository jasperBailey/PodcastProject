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
        <StyledAddButton className="deleteButton">Add</StyledAddButton>
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

export const StyledAddButton = styled.div`
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
  height: 20px;
`
