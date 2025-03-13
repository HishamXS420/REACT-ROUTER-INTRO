import { useLoaderData } from "react-router-dom";
import User from "../Components/User/User";


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>Our Users : {users.length}</h2>
            <p>Fantastic and vodro like me users</p>
            <div className="grid grid-cols-3 gap-3">
                {
                    users.map(user => <User  key={user.id} user={user}></User> )
                }
            </div>
        </div>

    );
};

export default Users;