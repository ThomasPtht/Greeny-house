import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
import Cart from "./Cart";



function Header(props) {
    return (
        <div className="flex justify-between items-center m-5">
        <div className="flex items-center">
            <img className='w-12' src={logo} alt="" />
            <h1 className='font-title text-2xl text-gray-700 ml-2'>Greeny House</h1>
            </div>

            <nav className="">
                <ul className="flex gap-16">
                <NavLink to="/">
                    <li className="cursor-pointer">Accueil</li></NavLink>
                    <NavLink to="/boutique">
                    <li className="cursor-pointer  relative group">Nos plantes
                    <ul className="absolute hidden p-2 m-1 rounded shadow-md group-hover:block">
                       
                        <li>Plantes vertes</li>
                        <li>Plantes grasses</li>
                        <li>Succulentes</li>
                    </ul></li></NavLink>
                    <li className="cursor-pointer">Blog</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </nav>
            <div className="flex gap-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"/></svg>


            {/* cart */}
          
<Cart />
            </div>

        </div>
    );
}

export default Header;
<h1>Greeny House</h1>