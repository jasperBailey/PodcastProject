import PodcastList from "../components/PodcastList";
import FavList from "../components/FavList";
import React, { useState, useEffect } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import PodcastService from "../services/PodcastService";

const PodcastContainer = () => {
    // const apikey = process.env.REACT_APP_KEY;

    // const endpoint = `https://api.taddy.org`;

    // const graphQLClient = new GraphQLClient(endpoint, {
    //     headers: {
    //         "X-USER-ID": 372,
    //         "X-API-KEY": apikey,
    //     },
    // });

    // const query = gql`
    //     {
    //         getPodcastSeries(uuid:"d682a935-ad2d-46ee-a0ac-139198b83bcc")
            
    //         {
    //             uuid
    //             name
    //             description
    //             imageUrl
    //         }
    //     }
    // `;

    // const getData = async () => {
    //     const data = await graphQLClient.request(query);
    //     console.log(data);
    // };

    // useEffect( () => {
    //     getData()
    // }, [])

    const [favPods, setFavPods] = useState([])

    const getFavPods = async () => {
        const favouritesData = await PodcastService.getFavourites()
        setFavPods(favouritesData)
    }

    useEffect( () => {
        getFavPods()
    }, [])

    return (
        <>
            <h2>Podcast Container</h2>
            {/* <PodcastList /> */}
            {favPods ? <FavList favPods={favPods}/>: null}
        </>
    );
};

export default PodcastContainer;
