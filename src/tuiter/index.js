import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import profileReducer from "./reducers/profile-reducer";
import EditProfileComponent from "./edit-profile";
const store = configureStore(
    {
        reducer: {who: whoReducer, tuitsData: tuitsReducer, profile: profileReducer}
    });

function Tuiter() {
    return(
        <Provider store = {store}>
            <h1>Tuiter</h1>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6" style={{"position": "relative"}}>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="/home"    element={<HomeComponent/>}/>
                        <Route path="/explore/*" element={<ExploreComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/profile/edit-profile" element={<EditProfileComponent />}/>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route index element={<WhoToFollowList/>}/>
                        <Route path="/home"    element={<WhoToFollowList/>}/>
                        <Route path="/explore/*" element={<WhoToFollowList/>}/>
                        <Route path="/profile" element={<WhoToFollowList/>}/>
                        <Route path="/profile/edit-profile" element={<WhoToFollowList/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    )
}

export default Tuiter;