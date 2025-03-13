import { Link } from "react-router";


const User = ({user}) => {
    const {id, name,email,phone} = user;
    return (
        <div className=" ml-4 mt-4  border-amber-300 rounded-2xl border-3 p-4 gap-2">
            <h2>Name: {name}</h2>
            <h2>Email: {email}</h2>
            <h2>Phone: {phone}</h2>

            {/* DYNAMIC ROUTE */}
            <Link className="text-red-700 font-semibold" to={`/user/${id}`}>Show Details</Link>
            {/* Dynamic Allocation of Links by this button. i.e. /user/10 */}
            <Link to={`/user/${id}`}>
            <button className="m-2 p-2 rounded-xl bg-amber-950 text-amber-200">Click Me</button>
            </Link>

        </div>
    );
};

export default User;