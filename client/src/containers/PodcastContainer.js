import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import SearchList from "../components/SearchList";
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

  const removeFavourite = (idToDelete) => {
    deleteFavourite(idToDelete);
    setFavPods(
      favPods.filter((favPod) => {
        return favPod._id !== idToDelete;
      })
    );
  };

  useEffect(() => {
    getFavPods();
  }, []);
  console.log("favPods: ", favPods);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<SearchList />} />

        <Route
          path="/favourites"
          element={
            favPods ? (
              <FavList favPods={favPods} removeFavourite={removeFavourite} />
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
