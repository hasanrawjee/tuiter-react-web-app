import React from "react";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)

    const font_size = {
        "fontSize": "12px"
    }

    const nudge_up = {
        "marginTop" : "-80px",
        "left" : "16px"
    }

    const bornDate = new Date(profile.dateOfBirth).toLocaleString('en-CA', {month: 'short', day: 'numeric', year: 'numeric'});

    const [month, year] = profile.dateJoined.split("/");
    const joinedDate = new Date(parseInt(year), parseInt(month)).toLocaleString('en-CA', {month: 'long', year: 'numeric'});

    const  navigate = useNavigate();

    return(
        <>
            <div className="row align-items-center justify-content-start">
                <div className="col-auto">
                    <button type="button" className="btn" title="back" onClick={() => navigate(-1)}>
                        <i className="bi bi-arrow-left" />
                    </button>
                </div>
                <div className="col-10">
                    <h5 className="fw-bold mb-0">{profile.firstName}{" "}{profile.lastName}</h5>
                    <div className="text-secondary" style={font_size}>
                        {Number(profile.tuits).toLocaleString()}{" "}Tuits
                    </div>
                </div>
            </div>
            <img src={`/images/${profile.bannerPicture}`} className="w-100" height="200" alt="banner" />
            <img src={`/images/${profile.profilePicture}`} className="rounded-circle img-thumbnail position-relative mb-2" style={nudge_up} width={160} alt="banner" />
            <Link to="/tuiter/profile/edit-profile" type="button" className="float-end border border-gray rounded-pill px-3 py-2 text-decoration-none bg-white text-black fw-bold my-3 mx-3">Edit Profile</Link>
            <div className="px-3">
                <h5 className="fw-bold mb-0 mt-3 ">{profile.firstName}{" "}{profile.lastName}</h5>
                <div className="text-secondary" style={font_size}>
                    {profile.handle}
                </div>
                <div className="mt-2">
                    {profile.bio}
                </div>
                <div className="text-secondary mt-2">
                    <span className="pe-3">
                        <i className="bi bi-geo-alt pe-2" />
                        {profile.location}
                    </span>
                    <span className="pe-3">
                        <i className="bi bi-balloon pe-2" />
                        Born {bornDate}
                    </span>
                    <span className="pe-3">
                        <i className="bi bi-calendar3 pe-2" />
                        Joined {joinedDate}
                    </span>
                </div>
                <div className="mt-2">
                    <span className="pe-3">
                        <span className="fw-bold">{Number(profile.followingCount).toLocaleString()}{" "}</span>
                        <span className="text-secondary">Following</span>
                    </span>
                    <span className="pe-3">
                        <span className="fw-bold">{Number(profile.followersCount).toLocaleString()}{" "}</span>
                        <span className="text-secondary">Followers</span>
                    </span>
                </div>
            </div>
        </>
    );
};
export default ProfileComponent;