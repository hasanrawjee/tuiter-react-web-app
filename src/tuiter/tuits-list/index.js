import TuitsListItem from "./tuits-list-item";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {findTuitsThunk} from "../../services/tuits-thunks";


const TuitsList = () => {

    const {tuits, loading} = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [dispatch])

    return(
        <div className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                tuits.map(tuit => {
                    return(<TuitsListItem key={tuit._id} tuit={tuit}/>)
                })
            }
        </div>
    )
}

export default TuitsList;