import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Products from "./pages/Products";
import Header from "./Components/Header/Header";
import Users from "./pages/Users";
import RootLayout from "./layouts/RootLayout";
import UserDetails from "./Components/UserDetails/UserDetails";
import Post from "./Components/Post/Post";
import Posts from "./Components/Posts/Posts";
import PostDetails from "./Components/PostDetails/PostDetails";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

// React Router with UseLoader and Loader is more efficient for fetching than useEffect

// Create a router with the routes configuration

 {/* Layout এর ভেতরে বাকি route গুলাকে রাখলে সবগুলার জন্য কাজ করবে (NESTED ROUTE)*/}
const router = createBrowserRouter([
  {
    // FIXED ROUTE
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage></ErrorPage>,
    // নিচের path বাদে  অন্য কোনো path এ গেলে errorElement কাজ করবে। 
    children: [
      {  index: true , path: "Home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contacts", element: <Contacts /> },
      { path: "products", element: <Products /> },
      { 
        path: "users", 
        element: <Users />, 
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
      },
      {
        path: "user/:userID",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
        element: <UserDetails />
        // : Anything after user/ will return to this 

        //ObjectuserID: "rma"[[Prototype]]: Object
      },
      {
        path: "posts", 
        element: <Posts />, 
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'), 
      },
      {
        path: "post/:postID",
        element:<PostDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
        // params কে যদি কোনো কারণে element এর tag এর ভেতরে লাগে, তাহলে route parameter কে যেভাবে পাওয়া যাবে -> useParams
      }
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  );
}

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contacts from "./pages/Contacts";
// import Products from "./pages/Products";
// import Header from "./Components/Header/Header";
// import Users from "./pages/Users";

// import RootLayout from "./layouts/RootLayout";

// const usersLoader = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users');
//   if(!response.ok){
//     throw new Error('Failed to fetch data');
//   }
//   return response.json();
// }

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<RootLayout/>}>
//           {/* Layout এর ভেতরে বাকি route গুলাকে রাখলে সবগুলার জন্য কাজ করবে (NESTED ROUTE)*/}
//             <Route index path="/" element={<Home />} />
//             <Route path="/about" element={<About />} />
//             <Route  path="/contacts" element={<Contacts />} />
//             <Route path="/products" element={<Products />} />
//             <Route  path="/users" element={<Users />} loader={usersLoader} />
            
//           </Route>
//         </Routes>
//       </BrowserRouter>
//       <h1>Vite + React</h1>
//     </>
//   );
// }

// export default App;
