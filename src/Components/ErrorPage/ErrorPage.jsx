import { Link, useRouteError } from "react-router";


const ErrorPage = () => {
    const error = useRouteError();
    // To show what error caused 

    console.log(error)
    return (
        <div>
            <h2 className="text-5xl font-bold">Oops!</h2>
            <h2 className="text-4xl font-bold mt-4 ">{error.status} {error.statusText || error.message}</h2>
            {
                error.status == 404 && 
                <div>
                    <h3>Page Not Found</h3>
                    <p>Go back where you from</p>
                    <Link to="/" className=" m-2 p-2 rounded-xl bg-amber-950 text-amber-200"><button className="mt-6 ">Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;