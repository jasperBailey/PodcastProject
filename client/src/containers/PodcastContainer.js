import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchList from "../components/SearchList";
import FavList from "../components/FavList";
import AudioContainer from "./AudioContainer";
import Series from "../components/Series";
import { getPodSeries } from "../services/APIService";
import "./PodcastContainer.css";

import {
  getFavourites,
  postFavourite,
  deleteFavourite,
} from "../services/PodcastService";

const PodcastContainer = () => {
  const [dbFavPods, setDbFavPods] = useState([]);
  const [podcastsData, setPodcastsData] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => fetchAllPodcastData, []);

  const fetchAllPodcastData = async () => {
    const favouritesData = await getFavourites();
    setDbFavPods(favouritesData);

    const allPodcastPromises = favouritesData.map(async (dbPodcast) => {
      const onePodcastData = await fetchOnePodcastData(dbPodcast.uuid);
      return onePodcastData;
    });

    const allPodcastsPromise = Promise.all(allPodcastPromises);
    const allPodcastsData = await allPodcastsPromise;
    setPodcastsData(allPodcastsData);
  };

  const fetchOnePodcastData = async (uuid) => {
    const data = await getPodSeries(uuid);
    return data;
  };

  const removeFavourite = (uuidToDelete) => {
    const idToDelete = dbFavPods.find((favPod) => {
      return favPod.uuid === uuidToDelete;
    })._id;

    deleteFavourite(idToDelete);

    setDbFavPods(dbFavPods.filter((favPod) => favPod.uuid !== uuidToDelete));

    setPodcastsData(
      podcastsData.filter((favPod) => favPod.uuid !== uuidToDelete)
    );
  };

  const addToFavourite = (podcastToAdd) => {
    const findDuplicate = dbFavPods.find((pod) => {
      return pod.uuid === podcastToAdd.uuid;
    });
    if (findDuplicate) return 

    const podcastToAddDB = {
      uuid: podcastToAdd.uuid,
    };
    postFavourite(podcastToAddDB).then((savedPod) => {
      const podToSave = { _id: savedPod._id, uuid: podcastToAdd.uuid };
      return setDbFavPods([...dbFavPods, podToSave]);
    });
    setDbFavPods([...dbFavPods, podcastToAddDB]);
    setPodcastsData([...podcastsData, podcastToAdd]);
  };

  return (
    <>
      <div className="app-container">
        <Router>
          <div className="logo"></div>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<SearchList addToFavourite={addToFavourite} />}
            />

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
            <Route
              path="series/:id"
              element={<Series setNowPlaying={setNowPlaying} />}
            />
          </Routes>
        </Router>
      </div>
      <AudioContainer nowPlaying={nowPlaying} />
    </>
  );
};

export default PodcastContainer;
