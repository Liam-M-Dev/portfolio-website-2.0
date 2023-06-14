import myself from "../assets/myself-patti.jpg"
import playing from "../assets/playing-game.jpg"

export function AboutPage(){

    return(
        <main className="box-border flex flex-col justify-center">
            <section>
                <h1 className="font-heading text-base font-bold my-2 ml-5 md:text-xl md:my-5 lg:text-2xl">
                    About Me
                </h1>
                <div className="px-2 mr-5 md:px-20 xl:px-40 xl:mr-10">
                    <p className="font-content text-sm">
                        My name is Liam and I&apos;m a <strong>junior full stack web developer</strong>. 
                        I&apos;m a creative person with a natural desire to problem solve and take on challenges.
                        What interests me with web development, is the process of translating an idea into a fully functional site.
                    </p>
                    <p className="font-content text-sm mt-1">
                        I have a strong interest in backend development and database creation/management.
                        Outside of web development, I have a keen interest in movies, board gaming, music both at home and live, seeing art exhibitions and writing poetry.
                    </p>
                    <p className="font-content text-sm mt-2">
                        If you would like to get in contact with me about potential collaborations or any queries please contact me via the contact page.
                    </p>
                </div>
                
                
                <figure className="flex flex-row mt-5 mx-auto justify-center">
                    <img className="object-contain w-52 md:w-4/12 lg:w-3/12" src={myself} alt="A photo of my cat Patti and myself" />
                    <img className="object-contain w-52 md:w-4/12 lg:w-3/12" src={playing} alt="A photo of myself playing a board game" />
                </figure>
            </section>
        </main>
    )
}