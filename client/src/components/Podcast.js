import { Link } from "react-router-dom";
import styled from "styled-components";
const Podcast = ({ podcast }) => {
  return (
    <>
      <StyledImg src={podcast.imageUrl}></StyledImg>
      <Link to={`/series/${podcast.uuid}`}>
        <h4>{podcast.name}</h4>
      </Link>
    </>
  );
};

export default Podcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
