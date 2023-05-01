import React, { useState } from "react";
import styled from "styled-components";
import { getPodcastSearch } from "../services/APIService";

const SearchList = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    const data = await getPodcastSearch(searchText);
    setSearchResults(data);
    
  };
  console.log("searchResults: ", searchResults);

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
      <SearchResults>
        {searchResults.map((result) => (
          <SearchResult key={result.uuid}>
            <ResultTitle>{result.name}</ResultTitle>
            <ResultImg>{result.description}</ResultImg>
          </SearchResult>
        ))}
      </SearchResults>
    </>
  );
};

export default SearchList;

const FilteredSearch = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SearchInput = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 0.25rem;
  margin-right: 0.5rem;
  flex: 1;
`;

const SearchButton = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #0077cc;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;

const SearchResults = styled.div`
  margin-top: 1rem;
`;

const SearchResult = styled.div`
  margin-bottom: 1rem;
`;

const ResultTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const ResultImg = styled.p`
  font-size: 1rem;
`;
