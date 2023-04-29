import { useEffect, useState } from "react";
import { getPodSeries } from "../services/APIService";

const Podcast = ({ pod }) => {
    const [podcastData, setPodcastData] = useState({});

    const fetchPodcastData = async () => {
        const data = await getPodSeries(pod.uuid);
        setPodcastData(data);
    };

    useEffect(() => {
        fetchPodcastData();
    }, []);

    return (
        <>
            <li>{podcastData.name}</li>
            <li>{podcastData.description}</li>
            <img src={podcastData.imageUrl}></img>
        </>
    );
};
export default Podcast;
