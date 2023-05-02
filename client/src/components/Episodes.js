import styled from "styled-components";
const Episodes = ({ selectedPod }) => {
  const getOneEpisode = selectedPod.episodes.map((episode) => {
    return (
      <StyledUl>
        <StyledLi>{episode.name}</StyledLi>

        <StyledLi>
          <AudioDiv>
            <audio src={episode.audioUrl} controls />
          </AudioDiv>
        </StyledLi>
      </StyledUl>
    );
  });

  return (
    <>
      <h2>{selectedPod.name}</h2>
      <StyledImg src={selectedPod.imageUrl}></StyledImg>
      <DesDiv>
        <p>{selectedPod.description}</p>
      </DesDiv>
      <StyledDiv>{getOneEpisode}</StyledDiv>
    </>
  );
};

export default Episodes;

export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
export const StyledUl = styled.ul`
  list-style: none;
`;
export const StyledLi = styled.li`
  color: black;
  padding-left: 0;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AudioDiv = styled.div``;
export const DesDiv = styled.div`
  width: fit-content;
  /* background-color: lightgrey; */
  padding: 20px;
  margin-bottom: 2em;
`;
