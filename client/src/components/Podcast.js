import { useEffect } from "react";
import { request, gql, GraphQLClient } from "graphql-request";


const Podcast = ({pod, apikey}) => {

    const endpoint = `https://api.taddy.org`;

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "X-USER-ID": 372,
            "X-API-KEY": apikey,
        },
    });

    const query = gql`
        {
            getPodcastSeries(uuid: ${pod.uuid}) {
                name
                description
                imageUrl
            }
        }
    `;

    const getData = async () => {
        const data = await graphQLClient.request(query);
    };

    useEffect( () => {
        getData()
    }, [])

    return ( <>
        <h4>Podcast Item</h4>

    </> );
}
 
export default Podcast;