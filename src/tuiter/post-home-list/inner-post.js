import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import posts from "./posts.json";
import MarkTextAsLink from "./mark-text-as-link";

const InnerPost = (
    {
        post = {
            type: "third-party",
            postImage: "post-elonmusk.jpeg",
            postTitle: "Countdown: Inspiration4x Mission to Space | Netflix Office Site",
            postContent: "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 " +
                "crew on the first all-civilian orbital space...",
            postLinkName: "netflix.com",
            postLink: "https://www.netflix.com/",
        },
        tweet = {
            _id: 345,
            userAvatar: "avatar-spacex.jpeg",
            userName: "SpaceX",
            userHandle: "SpaceX",
            time: "16h",
            title: "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → starlink.com/rv",
            markText: "starlink.com/rv",
            innerPost: {
                type: "",
                tweetId: null,
                postImage: "",
                postTitle: "",
                postContent: "",
                postLinkName: "",
                postLink: ""
            },
            reply: "654",
            retweet: "104",
            like: "5,947"
        },
    }) => {
    const roundedTop = {
        overflow: "hidden",
        "borderRadius": "1rem 1rem 0 0"
    }

    const renderThirdPartPost = () => {
        return (
            <>
                <img src={`/images/${post.postImage}`} className="w-100" style={roundedTop} alt="Post" />
                <div className="border-top px-3 py-3">
                    <h6 className="mb-0">{post.postTitle}</h6>
                    <p className="text-secondary mb-0">{post.postContent}</p>
                    <a href={post.postLink} className="text-secondary text-decoration-none">
                        <FontAwesomeIcon icon="fa-solid fa-link" />
                        {post.postLinkName}
                    </a>
                </div>
            </>
        )
    }

    const renderImage = () => {
        return (
            <img src={`/images/${post.postImage}`} className="w-100 rounded-4" alt="Post" />
        )
    }

    const filterById = (jsonObject, id) => {
        return jsonObject.filter(function (jsonObject) { return (jsonObject['_id'] === id); })[0];
    }

    const renderTweet = () => {
        return (
            <div className="px-2 pt-3">
                <div>
                    <img src={`/images/${tweet.userAvatar}`} className="rounded-circle mx-1 my-1" width="26px" alt="avatar" />
                    <span className="fw-bold">{tweet.userName}{' '}</span>
                    <FontAwesomeIcon icon="fa-solid fa-circle-check" className="text-primary" />
                    <span className="text-secondary">{' '}@{tweet.userHandle} {'\u00B7'} {tweet.time}</span>
                </div>
                {/* Post Title */}
                {tweet.markText && <MarkTextAsLink text={tweet.title} markText={tweet.markText} />}
                {!tweet.markText && tweet.title}
                {/* Inner Post */}
                <InnerPost post={tweet.innerPost}
                    tweet={tweet.innerPost.type === "tweet" ? filterById(posts, tweet.innerPost.tweetId) : null} />
            </div>
        )
    }

    return (
        <div className="my-3">
            {
                post.type &&
                <div className="border rounded-4">
                    {post.type === "third-party" && renderThirdPartPost()}
                    {post.type === "image" && renderImage()}
                    {post.type === "tweet" && renderTweet()}
                </div>
            }
        </div>
    )
}

export default InnerPost;