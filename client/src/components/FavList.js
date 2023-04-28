import Podcast from "./Podcast";
const FavList = ({ favPods}) => {
    return (
        <>
            <h3>Favourite List</h3>
            <ul>
                {favPods.map((pod, index) => {
                    return <Podcast pod={pod} key={index}/>;
                })}
            </ul>
        </>
    );
};

export default FavList;
