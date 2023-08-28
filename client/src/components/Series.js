import styled from "styled-components";
import { useParams } from "react-router-dom";
import { getPodSeries } from "../services/APIService";
import { useState, useEffect } from "react";
import Episode from "./Episode";

const Series = ({ setNowPlaying }) => {
    const { id } = useParams();
    const [seriesData, setSeriesData] = useState(null);

    const getSeriesData = async () => {
        const data = await getPodSeries(id);
        setSeriesData(data);
    };

    useEffect(() => getSeriesData, []);

    console.log('Series component - id:', id)

    return seriesData ? (
        <>
            <h2>{seriesData.name}</h2>
            <StyledImg src={seriesData.imageUrl}></StyledImg>
            <DesDiv>
                {seriesData.description}
            </DesDiv>
            <StyledDiv>
                {seriesData.episodes.map((episode, index) => (
                    <Episode
                        key={index}
                        episode={episode}
                        seriesName={seriesData.name}
                        seriesImageUrl={seriesData.imageUrl}
                        setNowPlaying={setNowPlaying}
                    />
                ))}
            </StyledDiv>
        </>
    ) : null;
};

export default Series;

export const StyledImg = styled.img`
    width: 120px;
    height: 120px;
`;

export const StyledDiv = styled.div`
   display: flex;
    flex-direction: column;
    cursor:pointer;
    
`;

export const AudioDiv = styled.div``;

export const DesDiv = styled.div`
 display: flex;
    justify-content: center;
    padding: 30px;
    margin-top: 2em;
    margin-bottom: 2em;
    color: black;
    font-style: revert;
    border: thin solid black;
    flex-wrap: nowrap;
    max-width: 1000px;
`