import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    // const params = useParams();
    const {postID} = useParams(); // Hook  To retrieve params value from the route loader 
    const {id,title,body}= post;

    console.log(postID);

    const handleGoBack = () => {
        navigate(-1);
        // Go 1 step backwards....remember ...1 step
    }

    return (
        <div>
            <h3>Post details about : {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;