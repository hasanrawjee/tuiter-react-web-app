import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import InnerPost from "./inner-post";
import posts from "./posts.json";
import MarkTextAsLink from "./mark-text-as-link";

const PostHomeListItem = (
    {
        post = {
            userAvatar: "avatar-elonmusk.jpeg",
            userName: "Elon Musk",
            userHandle: "elonmusk",
            time: "23h",
            title: "Amazing show about @Inspiration4x mission!",
            markText: "@Inspiration4x",
            innerPost: {
                type: "third-party",
                tweetId: null,
                postImage: "post-elonmusk.jpeg",
                postTitle: "Countdown: Inspiration4x Mission to Space | Netflix Office Site",
                postContent: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 " +
                    "crew on the first all-civilian orbital space...",
                postLinkName: "netflix.com",
                postLink: "https://www.netflix.com/",
            },
            reply: "4.2K",
            retweet: "3.5K",
            like: "37.5K",
            retweeted: ""
        }
    }
) => {
    const filterById = (jsonObject, id) => {
        return jsonObject.filter(function(jsonObject) {return (jsonObject['_id'] === id);})[0];
    }

    const fontSize = {
        "fontSize": "14px"
    }

    return(
        <div className="list-group-item pt-3 wd-post-list-item border border-light">
            {post.retweeted &&
                <div className="row align-items-center mb-1">
                    {/* Left icon */}
                    <div className="col-1 px-0">
                        <FontAwesomeIcon icon="fa-solid fa-retweet" className="float-end" />
                    </div>
                    {/* Right Person */}
                    <div className="col-11 ps-4 text-secondary fw-bold">
                        <span style={fontSize}>{post.retweeted} {" "} Retweeted</span>
                    </div>
                </div>
            }
            <div className="row">
                {/* Left Avatar */}
                <div className="col-1">
                    <img src={`/images/${post.userAvatar}`} className="rounded-circle" width="48px" alt="avatar"/>
                </div>
                {/* Right Content */}
                <div className="col-11 ps-4">
                    {/* User's name handle and post time */}
                    <div className="row align-items-center">
                        <div className="col-11">
                            <span className="fw-bolder">{post.userName}{' '}</span>
                            <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-primary"/>
                            <span className="text-secondary">{' '}@{post.userHandle} {'\u00B7'} {post.time}</span>
                        </div>
                        <div className="col-1">
                            <FontAwesomeIcon icon="fa-solid fa-ellipsis" className="text-secondary float-end"/>
                        </div>
                    </div>
                    {/* Post Title */}
                    {post.markText && <MarkTextAsLink text={post.title} markText={post.markText}/>}
                    {!post.markText && post.title}
                    {/* Inner Post */}
                    <InnerPost post={post.innerPost}
                               tweet={post.innerPost.type === "tweet" ? filterById(posts, post.innerPost.tweetId): null}/>
                    {/* Bottom Icons */}
                    <div className="row mb-2">
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-regular fa-comment" className="pe-2" />
                            <span>{post.reply}</span>
                        </a>
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-solid fa-retweet" className="pe-2" />
                            <span>{post.retweet}</span>
                        </a>
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-regular fa-heart" className="pe-2" />
                            <span>{post.like}</span>
                        </a>
                        <a href="/#" className="col text-secondary text-decoration-none">
                            <FontAwesomeIcon icon="fa-solid fa-arrow-up-from-bracket" className="pe-2" />
                        </a>
                    </div>
                    {/*  If retweeted, show this thread  */}
                    {post.retweeted &&
                        <div className="my-3">
                            <a href="/#" className="text-decoration-none text-primary">Show this thread</a>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default PostHomeListItem;