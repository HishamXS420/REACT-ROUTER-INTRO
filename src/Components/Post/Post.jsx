import { Link, useNavigate } from "react-router";

const Post = ({post}) => {
    const {id, title} = post; 

    // useNavigate
    const navigate = useNavigate();
    const handleShowDetail = () => {
        navigate(`/post/${id}`);
        // Alternative & better way to navigate through the routes
    }

    return (
        <div className=" ml-4 mt-4  border-amber-300 rounded-2xl border-3 p-4 gap-2rounded-xl ">
            <h4>Post of Id: {id} </h4>
            <p>{title}</p>
            <Link className=" text-red-700 font-semibold " to={`/post/${id}`}>Post Details</Link>
            <Link  to={`/post/${id}`}>
            <button className=" m-2 p-2 rounded-xl bg-amber-950 text-amber-200">
                Show Details
            </button>
            </Link>
            {/* useNavigate (Option on react router site) */}
            <button onClick={handleShowDetail}>Click to see details </button>
        </div>
    );
};

export default Post;