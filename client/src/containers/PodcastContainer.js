import PodcastList from "../components/PodcastList";
import FavList from "../components/FavList";
import React, { useState, useEffect } from 'react';

const PodcastContainer = () => {

    const apikey = process.env.REACT_APP_KEY;

    return ( <>
        <h2>Podcast Container</h2>
        <h3>Hello</h3>
        <PodcastList />
        <FavList/>
    </> );
}
 
export default PodcastContainer;