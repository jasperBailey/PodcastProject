const baseURL = "http://localhost:9000/api/favourites/";
const PodcastService = {
  getFavourites() {
    return fetch(baseURL).then((res) => res.json());
  },

  postFavourite(podcast) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(podcast),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  putFavourite(podcast) {
    return fetch(baseURL + podcast._id, {
      method: "PUT",
      body: JSON.stringify(podcast),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  deleteFavourite(id) {
    return fetch(baseURL + id, {
      method: "DELETE",
    });
  },
};
export default PodcastService;
