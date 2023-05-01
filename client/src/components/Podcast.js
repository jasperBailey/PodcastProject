import { useEffect, useState } from "react";
import { getPodSeries } from "../services/APIService";
import { Link, useNavigate } from "react-router-dom";
import Episode from "./Episode";
import styled from "styled-components";

const Podcast = ({ podcast, updatePod }) => {
  const [podcastData, setPodcastData] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [buttonText, setButtonText] = useState("");
  // const navigate = useNavigate()

  const fetchPodcastData = async () => {
    const data = await getPodSeries(podcast.uuid);
    setPodcastData(data);
  };

  useEffect(() => fetchPodcastData, []);
  useEffect(() => {
    if (podcast.subscribed == true) {
      setButtonText(" - ");
    } else {
      setButtonText(" + ");
    }
  }, [podcast.subscribed]);

  const handleToggleSubscribe = () => {
    updatePod({
      _id: podcast._id,
      uuid: podcast.uuid,
      subscribed: !podcast.subscribed,
    });
  };

  return (
    <>
      <div className="podcastList-body">
        <StypedImg src={podcastData.imageUrl}></StypedImg>
        <h4>
          {podcastData.name}{" "}
          <button onClick={handleToggleSubscribe}> {buttonText} </button>
        </h4>
        {/* add onclick to bring to this selected podcast to see more details: discription, episodes etc. */}
        {/* click icon to subscribe */}
      </div>
      <div className="episode-body">
        {episodes.length === 0 ? (
          <Episode
            podcastName={podcastData.name}
            podcastDes={podcastData.description}
            episodes={episodes}
          />
        ) : null}
      </div>
      <div>
        {podcast.subscribed === true ? (
          <Link
            to={{
              pathname: "/subscription",
              state: { data: { podcastData } },
            }}
          />
        ) : null}
      </div>
    </>
  );
};
export default Podcast;
export const StypedImg = styled.img`
  width: 100px;
  height: 100px;
`;
