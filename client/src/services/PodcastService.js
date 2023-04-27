const baseURL = "http://localhost:9000/api/favourites/";
const PostcastService = {
  getFavPodcast() {
    return fetch(baseURL).then((res) => res.json());
  },

  addFavPodcast(podcast) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(podcast),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  updateFavPodcast(podcast) {
    return fetch(baseURL + podcast._id, {
      method: "PUT",
      body: JSON.stringify(podcast),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  },

  deleteFavPodcast(id) {
    return fetch(baseURL + id, {
      method: "DELETE",
    });
  },
};
export default PodcastService;
