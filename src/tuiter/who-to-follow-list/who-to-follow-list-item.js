import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa-logo.jpg' }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-lg-2 col-xl-2 col-xxl-2">
                    <img className="rounded-circle" width={50} src={`/images/${who.avatarIcon}`} alt={"Logo"}/>
                </div>
                <div className="col-lg-8 col-xl-8 col-xxl-8 text-nowrap">
                    <div className="fw-bold">
                        {who.userName}{' '}
                        <FontAwesomeIcon icon="fa-solid, fa-circle-check"/>
                    </div>
                    <div>@{who.handle}</div>
                </div>
                <div className="col-lg-2 col-xl-2 col-xxl-2">
                    <button className="btn btn-primary rounded-pill float-end">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;