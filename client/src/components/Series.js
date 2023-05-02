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

    return seriesData ? (
        <>
            <h2>{seriesData.name}</h2>
            <StyledImg src={seriesData.imageUrl}></StyledImg>
            <DesDiv>
                <p>{seriesData.description}</p>
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
    width: 100px;
    height: 100px;
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
