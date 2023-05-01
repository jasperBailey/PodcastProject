import React, { useEffect } from "react";
import styled from "styled-components";
const SearchList = () => {
    // useEffect(()=>{

    // }, [])

    return (
        <>
            <FilteredSearch>
                <div>
                    <SearchInput type="text" />
                </div>
                <EpisodesList> Fltered Results show here: </EpisodesList>
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

export const EpisodesList = styled.ul`
  padding-left: 0;
  font-size: small;
`;