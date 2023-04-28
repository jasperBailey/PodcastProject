import PodcastList from "../components/PodcastList";
import FavList from "../components/FavList";
import React, { useState, useEffect } from "react";
import { request, gql, GraphQLClient } from "graphql-request";

const PodcastContainer = () => {
    const apikey = process.env.REACT_APP_KEY;

<<<<<<< HEAD
    const endpoint = `https://api.taddy.org`;

    const graphQLClient = new GraphQLClient(endpoint, {
        headers: {
            "X-USER-ID": 372,
            "X-API-KEY": apikey,
        },
    });

    const query = gql`
        {
            getPodcastSeries(name: "This American Life") {
                uuid
                name
                description
                imageUrl
            }
        }
    `;

    const getData = async () => {
        const data = await graphQLClient.request(query);
        console.log(data);
    };

    getData();

    return (
        <>
            <h2>Podcast Container</h2>
            <PodcastList />
            <FavList />
        </>
    );
};

export default PodcastContainer;
=======
    return ( <>
        <h2>Podcast Container</h2>
        <h3>Hello</h3>
        <PodcastList />
        <FavList/>
    </> );
}
 
export default PodcastContainer;
>>>>>>> ef130d9b05a52ab3aad9ca2d7bae1732fe2f23ec
