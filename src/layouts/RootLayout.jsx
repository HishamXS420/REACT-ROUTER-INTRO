import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

// useNavigation  কে root component এ ব্যবহার করতে হবে।


const RootLayout = () => {
    const navigation = useNavigation(); 
    // Loading state সহ আরো অনেক ক্ষেত্রে ব্যবহত useNavigation
     const location = useLocation();
         // কোন route এ এখন আছে তা জানার জন্য useLocation
     console.log(location);
 
    return (
        <div style={{backgroundColor: "aqua", height: "1000px" , width:"1000px"}}>
            <Header></Header>
            {
                navigation.state == "loading" ?  <p>Loading...</p> :  <Outlet></Outlet>
               
            }
          
            <h2 className="text-3xl items-center font-bold">This part is universal in the site</h2>
            {/* Layout টা যাতে অন্য জায়গায় ব্যবহার করা যায়, তাই জন্য <Outlet/> */}
            {/* Nested Route বলা হয় */}
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
