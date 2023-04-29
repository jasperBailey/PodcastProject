import { useEffect } from "react";
import { getPodSeries } from "../services/APIService";

const Podcast = ({pod}) => {

    const getPodData = async () => {
        const data = await getPodSeries(pod.uuid)
        console.log(data)
    }
    
    useEffect( () => {
        getPodData()
    }, [])



    return ( <>
        <h4>Podcast Item</h4>

    </> );
}
 
export default Podcast;