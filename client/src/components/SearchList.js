import React, { useEffect, useState } from "react";
import { getPodcastSearch } from "../services/APIService";
import SearchedPodcast from "./SearchedPodcast";
import "./SearchList.css";
const SearchList = ({ addToFavourite }) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const data = await getPodcastSearch(searchText);
    setSearchResults(data);
  };

  useEffect(() => handleSearch, []);
  // console.log("searchResults default: ", searchResults);

  const resultPodcast = searchResults.map((searchPod, index) => {
    return (
      <SearchedPodcast
        key={index}
        podcast={searchPod}
        addToFavourite={addToFavourite}
      />
    );
  });

  return (
    <>
      <div className="filteredSearch">
        <div className="inputAndButton">
          <input
            type="text"
            placeholder="Search for a podcast..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="searchButton" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="searchResults">{resultPodcast}</div>
    </>
  );
};

export default SearchList;
