import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getPodcastSearch } from "../services/APIService";
const SearchList = () => {

    const [searchResults, setSearchResults] = useState([])
    const [searchText, setSearchText] = useState("test")

    useEffect(()=>{
        return fetchSearchResults
    }, [searchText])


    const fetchSearchResults = async () => {
        const data = await getPodcastSearch(searchText)
        setSearchResults(data)
    }

    console.log(searchResults)

    return (
        <>
            <FilteredSearch>
                <div>
                    <SearchInput type="text" />
                </div>
                <ResultsList> Search results show here: </ResultsList>
            </FilteredSearch>
        </>
    );
};

export default SearchList;

export const FilteredSearch = styled.div`
  width: 300px;
  margin: 30px auto;
  font-size: 1.5rem;
`;

export const SearchInput = styled.input`
  font-size: inherit;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ResultsList = styled.ul`
  padding-left: 0;
  font-size: small;
`;