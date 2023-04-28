import Podcast from "./Podcast";
const FavList = ({ favPods, apikey }) => {
    return (
        <>
            <h3>Favourite List</h3>
            <ul>
                {favPods.map((pod) => {
                    return <Podcast pod={pod} apikey={apikey}/>;
                })}
            </ul>
        </>
    );
};

export default FavList;
