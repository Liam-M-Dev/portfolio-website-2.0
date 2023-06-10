import { CardDisplay } from "../components/CardComponent";
import etckSketch from "../assets/etch-sketch.png"
import displayBands from "../assets/display_bands.png"
import introPage from "../assets/intro_page.png"



export function ProjectPage(){

    return(
        <div className="flex flex-col justify-between gap-x-2.5">
            <h1 className="font-heading font-bold text-center self-center grow my-2">Projects</h1>
            
            <div className="flex flex-row flex-wrap justify-evenly">
                <CardDisplay image={etckSketch} 
                    title="Etch Sketch" 
                    description="A small etch sketch app allowing users to create etch sketchers with black/white and random colours.
                                Made with JavaScript, CSS, HTML" 
                    link="https://github.com/Liam-M-Dev/etch-a-sketch" />
                <CardDisplay image={displayBands} 
                    title="Gig Guid API" 
                    description="An API built with Python using Flask framework and PostgreSQL as the database management system.
                        Designed to allow users to create profiles, create bands, venues, shows and attend shows." 
                    link="https://github.com/Liam-M-Dev/gig-guide-api" />
                <CardDisplay image={introPage} 
                    title="Haiku Generator" 
                    description="Haiku Generator terminal application, made with Python and Bash scripts.
                        Allows user to create their own haiku poems and save them in JSON format." 
                    link="https://github.com/Liam-M-Dev/etch-a-sketch" />
            </div>
           
        </div>
    )
}