import React from "react";
import "./index.css";
import NavigationTab from "../navigation-tab";
import ForYou from "./for-you";
import {Route, Routes} from "react-router";

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute wd-nudge-up"/>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi bi-gear-fill fs-2 position-relative"/>
                </div>
            </div>
            <NavigationTab/>
            <Routes>
                <Route index element={<ForYou/>}/>
                <Route path="/for-you" element={<ForYou/>}/>
            </Routes>
        </>
    );
};
export default ExploreComponent;