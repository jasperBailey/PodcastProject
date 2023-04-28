import PodcastList from "../components/PodcastList";
import FavList from "../components/FavList";
import React, { useState, useEffect } from "react";
import { request, gql, GraphQLClient } from "graphql-request";
import PodcastService from "../services/PodcastService";

const PodcastContainer = () => {
  const [favPods, setFavPods] = useState([]);

  const getFavPods = async () => {
    const favouritesData = await PodcastService.getFavourites();
    setFavPods(favouritesData);
  };

  useEffect(() => {
    getFavPods();
  }, []);

  return (
    <>
      <h2>Podcast Container</h2>
      {/* <PodcastList /> */}
      {favPods ? <FavList favPods={favPods} /> : null}
    </>
  );
};

export default PodcastContainer;
