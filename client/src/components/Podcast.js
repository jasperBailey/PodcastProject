import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Podcast.css";

const Podcast = ({ podcast, addToFavourite }) => {
  const [subsButtonMsg, setSubsButtonMsg] = useState("subscribe");
  const handleClickButton = (podcast) => {
    addToFavourite(podcast);
    setSubsButtonMsg("subscribed");
  };

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
