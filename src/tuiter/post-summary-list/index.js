import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-list-item";

const PostSummaryList = (
    {
        sidebar = false
    }
) => {
    const postsArray = useSelector((state) => state.tuits)
    return(
        <ul className="list-group">
            {
                postsArray.map(post => <PostSummaryItem key={post._id} post={post} sidebar={sidebar}/> )}
        </ul>
    );
};
export default PostSummaryList;