import { NavLink } from "react-router-dom";
import './Navbar.css'
const NavBar = () => {
 
  return (
    <div>
    <nav >
        <div >
            <ul>
                <li >
                <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/classproduct">Products1</NavLink>
                </li>
                <li>
                <NavLink to="/product">Product2</NavLink>
                </li>
                <li>
                <NavLink to="/counterapp">Counter App</NavLink>
                </li>
                <li>
                <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </div>   
    </nav>
    </div>
  );
};

export default NavBar;

