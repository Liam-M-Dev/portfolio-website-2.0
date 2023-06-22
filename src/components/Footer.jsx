import { useLocation } from "react-router-dom"
import { HomePageLink } from "./HomeImage";

export function Footer(){
    let pageName = useLocation();
    let imgComponent;
    console.log(pageName.pathname)

    if (pageName.pathname !== "/") {
        imgComponent = <HomePageLink />
    }

    return(
        <div className="flex flex-row justify-between items-center w-full fixed left-0 bottom-0 right-0 py-2 bg-white">
            <ul className="ml-10 font-content text-content text-base md:text-xl">
                <li>
                   <a href="https://github.com/Liam-M-Dev">
                        GitHub
                   </a>
                </li>
            </ul>

            {imgComponent}

            <ul className="mr-10 font-content text-content text-base md:text-xl">
                <li>
                    <a href="https://www.linkedin.com/in/liam-massey-60b552256/">
                        LinkedIn
                    </a>
                </li>
            </ul>
        </div>
    )
}