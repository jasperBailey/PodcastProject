import { useEffect, useState } from "react";
import { getPodSeries } from "../services/APIService";

const Podcast = ({pod}) => {

    const [podcastData, setPodcastData] = useState({})

    const fetchPodcastData = async () => {
        const data = await getPodSeries(pod.uuid)
        return data
    }
    
    useEffect( () => {
        const data = fetchPodcastData()
        setPodcastData(data)
    }, [])



    return ( <>
        

    </> );
}
export default Podcast;