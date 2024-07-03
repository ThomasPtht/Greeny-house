import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import Cart from "../pages/Cart";



function Header(props) {

const activeLink = "border-green-500 border-b-4  transition-all"


    return (
        <div className="flex justify-between items-center m-5">
        <div className="flex items-center">
            <img className='w-12' src={logo} alt="" />
            <h1 className='font-title text-2xl text-gray-700 ml-2'>Greeny House</h1>
            </div>

            <nav className="">
                <ul className="flex gap-16">
                <NavLink to="/" className={({ isActive }) =>
     (isActive ? activeLink : "")}
  >
                    <li className="cursor-pointer  active:text-green-700 ">Accueil</li></NavLink>
                    <NavLink to="/boutique" className={({ isActive }) =>
     (isActive ? activeLink : "")}
  >
                    <li className="cursor-pointer active:text-green-700 ">Nos plantes
                    </li></NavLink>
                    <li className="cursor-pointer active:text-green-700" >Blog</li>
                    <li className="cursor-pointer active:text-green-700">Contact</li>
                </ul>
            </nav>
            <div className="flex gap-5">
             
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>

            {/* cart */}
            <div>
            <NavLink to="/panier">
             <svg fill='' className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z"/></svg></NavLink>
        </div>
            </div>

        </div>
    );
}

export default Header;