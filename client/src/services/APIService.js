import { gql, GraphQLClient } from "graphql-request";

const makeGQLRequest = async (query) => {
  const apiKey = process.env.REACT_APP_KEY;
  const userId = process.env.REACT_APP_USER_ID;
  const endpoint = `https://api.taddy.org`;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      "X-USER-ID": userId,
      "X-API-KEY": apiKey,
    },
  });

  console.log('Created GQL Client, making request...')

  const data = await graphQLClient.request(query);

  console.log('got data:', data)
  return data;
};

export const getPodSeries = async (uuid) => {
  const query = gql`
        {
            getPodcastSeries(uuid: "${uuid}") {
                uuid
                name
                description
                imageUrl
                episodes{
                    uuid
                    name
                    description
                    audioUrl
                }
            }
        }
    `;

  console.log('getPodSeries uuid:', uuid);

  const data = await makeGQLRequest(query);
  return data.getPodcastSeries;
};

export const getPodcastSearch = async (searchText) => {
  const query = gql`
        {
            searchForTerm(term:"${searchText}", filterForTypes:[PODCASTSERIES], searchResultsBoostType:BOOST_POPULARITY_A_LITTLE){
                searchId
                podcastSeries{
                    uuid
                    name
                    description
                    imageUrl
                }
        
                
            }
        }
    `;
  const data = await makeGQLRequest(query);
  return data.searchForTerm.podcastSeries;
};
