import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
const Episode = ({ episode, setNowPlaying, seriesName, seriesImageUrl }) => {
  const handlePlayEpisode = () => {
    setNowPlaying({
      ...episode,
      series: seriesName,
      imageUrl: seriesImageUrl,
    });
  };

  return (
    <StyledUl>
      <StyledLi>{episode.name}</StyledLi>

      <StyledLi>
        <span onClick={handlePlayEpisode}>
          <FontAwesomeIcon icon={faCirclePlay} />
          &nbsp;&nbsp;
        </span>

        <span>
          &nbsp;&nbsp;
          <FontAwesomeIcon icon={faHeart} />
        </span>
      </StyledLi>
    </StyledUl>
  );
};

export default Episode;

export const StyledUl = styled.ul`
  list-style: none;
`;

export const StyledLi = styled.li`
  color: black;
  padding-left: 0;
`;
