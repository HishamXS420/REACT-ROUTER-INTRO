import { Link ,NavLink} from "react-router";
import './Header.css'
    

const Header = () => {
  return (
    <div>
    
      <NavLink className="Navlink rounded-xl p-4 " to="/home">
        Home
      </NavLink>
      <NavLink className="Navlink rounded-xl p-4" to="/about">
        About
      </NavLink>
      <NavLink className="Navlink rounded-xl p-4" to="/contacts">
        Contacts
      </NavLink>
      <NavLink className="Navlink rounded-xl p-4" to="/products">
       Products
      </NavLink>
      <NavLink className=" link rounded-xl p-4" to="/users">
       Users
      </NavLink>
      <NavLink className="a rounded-xl p-4" to="/posts">
       Posts
      </NavLink>
      {/* NavLink ব্যবহার করলে DOM এ active class দিয়ে দিবে যেটা normally class use করলে দিবেনা'
       */}
    </div>
  );
};

export default Header;
