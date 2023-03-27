import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const TuitsStats = (
    {
        tuit = {
            _id: 234,
            topic: "Tesla",
            userName: "Tesla",
            time: "4d",
            title: "Autopilot and Full Self-Driving Capability",
            image: "tesla-logo.png",
            liked: false,
            replies: 234,
            retuits: 543,
            likes: 3456,
            handle: "@tesla",
            tuit: "Autopilot is an advanced driver assistance system that enhances safety and convenience behind the wheel. When used properly, Autopilot reduces your overall workload as a driver. Each new Tesla vehicle is equipped with eight external cameras and powerful vision processing to provide an additional layer of safety. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar."
        }
    }
) => {
    return(
        <>
            <div className="row">
                <a href="/#" className="col text-secondary text-decoration-none">
                    <FontAwesomeIcon icon="fa-regular fa-comment" className="pe-1 pe-sm-2" />
                    <span>{tuit.replies}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    <FontAwesomeIcon icon="fa-solid fa-retweet" className="pe-1 pe-sm-2" />
                    <span>{tuit.retuits}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    {tuit.liked && <FontAwesomeIcon icon={faHeart} color={ 'red' } className="pe-1 pe-sm-2" />}
                    {!tuit.liked && <FontAwesomeIcon icon="fa-regular fa-heart" className="pe-1 pe-sm-2" />}
                    <span>{tuit.likes}</span>
                </a>
                <a href="/#" className="col text-secondary text-decoration-none">
                    <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className="pe-1 pe-sm-2" />
                </a>
            </div>
        </>
    )
}
export default TuitsStats;