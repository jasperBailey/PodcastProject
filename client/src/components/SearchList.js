import React, { useState } from "react";
import styled from "styled-components";
import { getPodcastSearch } from "../services/APIService";
import Podcast from "./Podcast";

const SearchList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const data = await getPodcastSearch(searchText);
    setSearchResults(data);
  };
  console.log("searchResults: ", searchResults);

  const resultPodcast = searchResults.map((searchPod, index) => {
    return <Podcast key={index} podcast={searchPod} />;
  });

  return (
    <>
      <FilteredSearch>
        <div>
          <SearchInput
            type="text"
            placeholder="Search for a podcast..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </div>
      </FilteredSearch>
      <SearchResults>{resultPodcast}</SearchResults>
    </>
  );
};

export default SearchList;

const FilteredSearch = styled.div`
  display: flex;
  justify-content: flex-end;
  position: absolute;
  top: 30px;
  right: 15px;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid black;
  margin-right: 15px;
  flex: 2px; /* increase the flex value */
`;

const SearchButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem; /* reduce the padding */
  background-color: black;
  color: white;
  border: none;
  border-radius: 0rem; /* reduce the border-radius */
  cursor: pointer;
`;

const SearchResults = styled.div`
  display: flex; /* use a flexbox layout */
  flex-wrap: wrap; /* wrap items to the next row */
  margin-top: 5rem;
`;

const SearchResult = styled.div`
  margin-bottom: 1rem;
  display: flex; /* ensure each item is a flex container */
  flex-direction: column; /* set the flex direction to column */
  align-items: center; /* center the items horizontally */
  margin-right: 1rem; /* add some margin between items */
  flex: 0 0 calc(33.33% - 1rem); /* set the width of each item to one-third of the container minus the margin */
`;

const ResultTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ResultDescription = styled.p`
  font-size: 1rem;
`;

export const ResultImg = styled.img`
  width: 100px;
  height: 100px;
`;