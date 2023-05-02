import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getPodSeries } from "../services/APIService";
import { useState, useEffect } from "react";

const Series = () => {
    const { id } = useParams();
    const [seriesData, setSeriesData] = useState(null);
    const getSeriesData = async () => {
        const data = await getPodSeries(id);
        console.log(data)
        setSeriesData(data);
    };

    useEffect(() => getSeriesData, []);
    console.log(seriesData)

    return (
        <>
            <h2>{seriesData.name}</h2>
            <StyledImg src={seriesData.imageUrl}></StyledImg>
            <DesDiv>
                <p>{seriesData.description}</p>
            </DesDiv>
            <StyledDiv>
                {seriesData ? seriesData.episodes.map((episode) => {
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
                }) : null}
            </StyledDiv>
        </>
    );
};

export default Series;

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
