import React, {useState} from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateUser} from "../reducers/profile-reducer";
import './index.css'

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile)

    const font_size = {
        "fontSize" : "14px",
    }

    const darken_image = {
        "filter" : "brightness(70%)",
    }

    const nudge_up_avatar = {
        ...darken_image,
        "marginTop" : "-107px",
        "left" : "16px",
    }

    const nudge_up_icon_1 = {
        "top" : "-100px",
        "left" : "40%",
    }

    const nudge_up_icon_2 = {
        "top" : "-100px",
        "left" : "50%",
    }

    const nudge_up_icon_3 = {
        "top" : "-55px",
        "left" : "-80px",
    }


    let [userName, setUserName] = useState(profile.firstName + " " + profile.lastName);
    let [bio, setBio] = useState(profile.bio);
    let [location, setLocation] = useState(profile.location);
    let [website, setWebsite] = useState(profile.website);
    let [dateOfBirth, setDateOfBirth] = useState(profile.dateOfBirth);

    const dispatch = useDispatch();

    const saveClickHandler = () => {
        const newFirstName = userName.split(" ")[0];
        let newHandle = "@" + userName;
        newHandle = newHandle.replace(/\s/g, '');
        newHandle = newHandle.toLowerCase();

        const userInfo = {
            firstName: newFirstName,
            lastName: userName.slice(newFirstName.length + 1),
            handle: newHandle,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth,
        }
        dispatch(updateUser(userInfo));
    }

    const formatDateMM_dd_yyyy = (inputDate) => {
        const [year, month, date] = inputDate.split("-")
        return month + '/' + date+ '/' + year;
    }

    const formatDateYYYY_MM_dd = (inputDate) => {
        return new Date(inputDate).toISOString().split('T')[0]
    }

    const formatDateMMMDDYYYY = (inputDate) => {
        return new Date(inputDate).toLocaleString('en-CA', {month: 'short', day: 'numeric', year: 'numeric'});
    }

    const [edit, setEdit] = useState(true)

    return(
        <>
            <div className="row align-items-center justify-content-start pb-1">
                <div className="col-auto">
                    <Link to="/tuiter/profile" className="btn" title="cancel" >
                        <i className="bi bi-x-lg" />
                    </Link>
                </div>
                <div className="col-10">
                    <span className="fs-5 fw-bold">Edit Profile</span>
                    <Link to="/tuiter/profile" className="btn btn-dark btn-sm rounded-pill position-relative float-end px-3 fw-bold" onClick={saveClickHandler}>Save</Link>
                </div>
            </div>
            <div>
                <img src={`/images/${profile.bannerPicture}`} className="w-100" style={darken_image} height="200" alt="banner" />
                <button className="position-relative border border-0 rounded-circle btn-lg bg-dark bg-opacity-75 text-white" style={nudge_up_icon_1}><i className="bi bi-camera"/></button>
                <button className="position-relative border border-0 rounded-circle btn-lg bg-dark bg-opacity-75 text-white" style={nudge_up_icon_2}><i className="bi bi-x-lg"/></button>
            </div>
            <div>
                <img src={`/images/${profile.profilePicture}`} className="rounded-circle img-thumbnail position-relative mb-2" style={nudge_up_avatar} width={160} alt="avatar" />
                <button className="position-relative border border-0 rounded-circle btn-lg bg-dark bg-opacity-75 text-white" style={nudge_up_icon_3}><i className="bi bi-camera"/></button>
            </div>

            <div className="px-3">
                <div className="border w-100 rounded-1 mt-2" >
                    <label className="wd-input-label text-secondary">Name</label>
                    <input type="text"
                           className="form-control border-0 pt-0"
                           defaultValue={userName}
                           onChange={(event) => setUserName(event.target.value)} />
                </div>
                <div className="border w-100 rounded-1 mt-4">
                    <label className="wd-input-label text-secondary">Bio</label>
                    <textarea rows={3}
                              className="form-control border-0 pt-0"
                              value={bio}
                              onChange={(event) => setBio(event.target.value)} />
                </div>
                <div className="border w-100 rounded-1 mt-4" >
                    <label className="wd-input-label text-secondary">Location</label>
                    <input type="text"
                           className="form-control border-0 pt-0"
                           defaultValue={location}
                           onChange={(event) => setLocation(event.target.value)} />
                </div>
                <div className="border w-100 rounded-1 mt-4" >
                    <label className="wd-input-label text-secondary">Website</label>
                    <input type="text"
                           className="form-control border-0 pt-0"
                           defaultValue={website}
                           onChange={(event) => setWebsite(event.target.value)} />
                </div>
                <div className="mt-4">
                    <div className="text-secondary" style={font_size}>
                        Birth Date {'\u00B7'}
                        {edit && <button className="border-0 text-primary bg-transparent" onClick={() => setEdit(false)}>Edit</button>}
                        {!edit && <button className="border-0 text-primary bg-transparent" onClick={() => setEdit(true)}>Cancel</button>}
                    </div>
                    {edit && <div className="pt-1">{formatDateMMMDDYYYY(dateOfBirth)}</div>}
                    {!edit &&
                        <input type="date"
                               className="form-control"
                               defaultValue={formatDateYYYY_MM_dd(dateOfBirth)}
                               onChange={(event) => setDateOfBirth(formatDateMM_dd_yyyy(event.target.value))}
                        />
                    }
                </div>
                <div className="fw-bold mt-4 text-dark">
                    Switch to professional
                    <span className="float-end"><i className="bi bi-chevron-right"/></span>
                </div>
            </div>
        </>
    );
};
export default EditProfileComponent;