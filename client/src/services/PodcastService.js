const baseURL = "http://localhost:9000/api/favourites/";

export const getFavourites = () => {
  return fetch(baseURL).then((res) => res.json());
};

export const postFavourite = (podcast) => {

  return fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(podcast),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const putFavourite = (podcast) => {
  return fetch(baseURL + podcast._id, {
    method: "PUT",
    body: JSON.stringify(podcast),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    // console.log(res.json());
    return res.json();
  });
};

export const deleteFavourite = (id) => {
  return fetch(baseURL + id, {
    method: "DELETE",
  });
};
