import { NavLink } from "react-router-dom"
import logo from "../assets/liamlogo2.png"


export function HomePageLink(){

    return(
        <div>
            <NavLink to="/"><img src={logo} className="w-12 mx-auto" alt="Logo that links to homepage" />
            </NavLink>
        </div>
    )
}