import { useLoaderData } from "react-router";

const UserDetails = () => {

    const user = useLoaderData();
    const {name,website} = user;
    return (
        <div className="my-6">
            <h2 className="text-4xl font-semibold mb-2">Details about user: {name}</h2>
            <h2 className="text-xl">Link: {website}</h2>
        </div>
    );
};

export default UserDetails;