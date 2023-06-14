

export function Footer(){


    return(
        <div className="flex flex-row justify-between w-full fixed left-0 bottom-0 right-0 py-5 bg-white">
            <ul className="ml-10 font-content text-content text-base md:text-xl">
                <li>
                   <a href="https://github.com/Liam-M-Dev">
                        GitHub
                   </a>
                </li>
            </ul>
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