import styled from "styled-components";

const Episode = ( { episode, setNowPlaying } ) => {

    const handlePlayEpisode = () => {
        setNowPlaying(episode)
    }

    return (
        <StyledUl>
            <StyledLi>{episode.name}</StyledLi>

            <StyledLi>
                <p onClick={handlePlayEpisode}>Play</p>
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
