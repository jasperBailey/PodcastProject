import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchList from "../components/SearchList";
import FavList from "../components/FavList";
import { getPodSeries } from "../services/APIService";
import './PodcastContainer.css'

import {
    getFavourites,
    postFavourite,
    putFavourite,
    deleteFavourite,
} from "../services/PodcastService";

const PodcastContainer = () => {
    const [dbFavPods, setDbFavPods] = useState([]);
    const [podcastsData, setPodcastsData] = useState([]);

    useEffect(() => getDbFavPods, []);


    if (!podcastsData) {
        fetchAllPodcastData()
    }

    const getDbFavPods = async () => {
        const favouritesData = await getFavourites();
        setDbFavPods(favouritesData);
    };

    const fetchAllPodcastData = async () => {

        const allPodcastPromises = dbFavPods.map( async (dbPodcast) => {
            const onePodcastData = await fetchOnePodcastData(dbPodcast.uuid)
            return onePodcastData
        })

        const allPodcastsPromise = Promise.all(allPodcastPromises)
        const allPodcastsData = await allPodcastsPromise
        setPodcastsData(allPodcastsData)
    };

   

    const fetchOnePodcastData = async (uuid) => {
        const data = await getPodSeries(uuid);
        return data
    }






    const removeFavourite = (uuidToDelete) => {
        const idToDelete = dbFavPods.find((favPod) => {
            return favPod.uuid === uuidToDelete;
        })._id;

        deleteFavourite(idToDelete);
        setDbFavPods(
            dbFavPods.filter((favPod) => {
                return favPod.uuid !== uuidToDelete;
            })
        );
    };

    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<SearchList />} />

                <Route
                    path="/favourites"
                    element={
                        dbFavPods ? (
                            <FavList
                            podcastsData={podcastsData}
                                removeFavourite={removeFavourite}
                            />
                        ) : null
                    }
                />
                {/* 
        <Route path="/queue" element={<Queue />} />
        <Route path="liked" element={<Liked />} /> */}
            </Routes>
        </Router>
    );
};

export default PodcastContainer;

