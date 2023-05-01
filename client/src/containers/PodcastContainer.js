import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import SubsList from "../components/SubsList";
import FavList from "../components/FavList";

import {
  getFavourites,
  postFavourite,
  putFavourite,
  deleteFavourite,
} from "../services/PodcastService";

const PodcastContainer = () => {
  const [favPods, setFavPods] = useState([]);

  const getFavPods = async () => {
    const favouritesData = await getFavourites();
    setFavPods(favouritesData);
  };
  const updatePod = (updatedPodcast) => {
    putFavourite(updatedPodcast);

    const index = favPods.findIndex((pod) => {
      return pod.uuid === updatedPodcast.uuid;
    });
    const updatedPodcasts = [...favPods];
    updatedPodcasts[index] = updatedPodcast;
    setFavPods(updatedPodcasts);
    console.log("when update the subscribtion: ", favPods[0].subscribed);
  };

  useEffect(() => {
    getFavPods();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            favPods ? <FavList favPods={favPods} updatePod={updatePod} /> : null
          }
        />

        <Route path="/subscription" element={<SubsList/>} />
        {/* 
        <Route path="/queue" element={<Queue />} />
        <Route path="liked" element={<Liked />} /> */}
      </Routes>
    </Router>
  );
};

export default PodcastContainer;
