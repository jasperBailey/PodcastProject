import { useEffect, useState } from "react";
import { getPodSeries } from "../services/APIService";
import styled from "styled-components";

const FavPodcast = ({ podcast, removeFavourite }) => {
  const [podcastData, setPodcastData] = useState({});

  const fetchPodcastData = async () => {
    const data = await getPodSeries(podcast.uuid);
    setPodcastData(data);
  };

  useEffect(() => fetchPodcastData, []);

  const handleButtonClick = () => {
    removeFavourite(podcast._id);
  };

  return (
    <>
      <div className="podcastList-body">
        <StyledImg src={podcastData.imageUrl}></StyledImg>
        <h4>
          {podcastData.name}{" "}
          <button onClick={handleButtonClick}>
            <span>❌</span> Remove
          </button>
        </h4>
        {/* add onclick to bring to this selected podcast to see more details: discription, episodes etc. */}
      </div>
    </>
  );
};
export default FavPodcast;
export const StyledImg = styled.img`
  width: 100px;
  height: 100px;
`;
