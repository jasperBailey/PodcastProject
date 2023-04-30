import Podcast from "./Podcast";
import styled from "styled-components";
import React, { useEffect, useState } from "react";

const FavList = ({ favPods, updatePod }) => {
  // const [allPods, setAllPods] = useState([]);
  // const [filteredList, setFilteredList] = useState([]);
  //  useEffect(() => {
  //   fetchAllPods();
  // }, []);

  return (
    <>
      <FilteredSearch>
        <div>
          <SearchInput type="text" />
        </div>
        <EpisodesList> Fltered Results show here: </EpisodesList>
      </FilteredSearch>
      <StyledDiv1 className="pods-body">
        <StyledDiv2 className="pod-body">
          {favPods.map((pod, index) => {
            return <Podcast podcast={pod} key={index} updatePod={updatePod} />;
          })}
        </StyledDiv2>
      </StyledDiv1>
    </>
  );
};

export default FavList;
export const StyledDiv1 = styled.div`
  margin: auto;
  padding-top: 100px;
  padding-left: 150px;
  display: flex;
`;
export const StyledDiv2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

const FilteredSearch = styled.div`
  width: 300px;
  margin: 30px auto;
  font-size: 1.5rem;
`;

const SearchInput = styled.input`
  font-size: inherit;
  border-radius: 5px;
  margin-top: 10px;
`;
const EpisodesList = styled.ul`
  padding-left: 0;
  font-size: small;
`;
