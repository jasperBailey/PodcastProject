import { useEffect, useState} from "react";
import { request, gql, GraphQLClient } from "graphql-request";

const Podcast = ({pod}) => {

    const [podcastData, setPodcastData] = useState({})

    const apikey = process.env.REACT_APP_KEY

    const endpoint = `https://api.taddy.org`;

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "X-USER-ID": 372,
            "X-API-KEY": apikey,
        },
    });

    const query = gql`
        {
            getPodcastSeries(uuid: "${pod.uuid}") {
                uuid
                name
                description
                imageUrl
            }
        }
    `;

    const getData = async () => {
        const data = await graphQLClient.request(query);
       setPodcastData(data.getPodcastSeries)
    };

    useEffect( () => {
        getData()
    }, [])

    return ( <>
        <li>{podcastData.name}</li>
        <li>{podcastData.description}</li>
        <img src={podcastData.imageUrl}></img>

    </> );
}
export default Podcast;