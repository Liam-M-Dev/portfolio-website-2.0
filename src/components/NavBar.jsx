import { NavLink } from "react-router-dom";

export function NavBar(){

    // let activeNav = {

    // }


    return(
        <nav className="flex justify-center py-4 bg-black md:py-6 lg:py-2" >
            <ul className="flex flex-row justify-evenly flex-grow text-white font-heading text-lg font-bold md:text-xl lg:text-lg">
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                
                <li>
                    <NavLink to="/projects">Projects</NavLink>
                </li>
                
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}