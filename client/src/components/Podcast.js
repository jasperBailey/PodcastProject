import { useEffect } from "react";
import { request, gql, GraphQLClient } from "graphql-request";

const Podcast = ({pod}) => {

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
        console.log(data)
    };

    useEffect( () => {
        getData()
    }, [])

    return ( <>
        <h4>Podcast Item</h4>

    </> );
}
 
export default Podcast;