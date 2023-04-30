import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
const SubsList = () => {
  const location = useLocation();
  const state = location.state?.data;
  console.log("location", location);
  console.log("state here at Subs", state);

  // useEffect(()=>{

  // }, [])

  return (
    <>
      <p>{state}</p>
    </>
  );
};

export default SubsList;
