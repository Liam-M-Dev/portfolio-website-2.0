import { NavLink } from "react-router-dom";

export function NavBar(){

    // let activeNav = {

    // }


    return(
        <nav>
            <ul>
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