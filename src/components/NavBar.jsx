import { NavLink } from "react-router-dom";

export function NavBar(){

    // let activeNav = {

    // }


    return(
        <nav className="block flex justify-center py-4 bg-black" >
            <ul className="flex flex-row justify-between flex-grow text-white text-lg font-extrabold font-sans">
                <li className="ml-4">
                    <NavLink to="/about">About</NavLink>
                </li>
                
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                
                <li className="mr-4">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}