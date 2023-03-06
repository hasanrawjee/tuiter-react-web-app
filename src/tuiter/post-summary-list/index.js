import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-list-item";

const PostSummaryList = (
    {
        sidebar = false
    }
) => {
    return(
        <ul className="list-group">
            {
                postsArray.map(post => <PostSummaryItem key={post._id} post={post} sidebar={sidebar}/> )}
        </ul>
    );
};
export default PostSummaryList;