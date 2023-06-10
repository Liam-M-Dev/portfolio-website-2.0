import myself from "../assets/myself-patti.jpg"
import playing from "../assets/playing-game.jpg"

export function AboutPage(){

    return(
        <main className="box-border flex flex-col justify-center">
            <section>
                <h1 className="font-heading text-base font-bold my-2 ml-5">
                    About Me
                </h1>

                <p className="font-content text-sm mx-3">
                    My name is Liam and I&apos;m a <strong>junior full stack web developer</strong>. 
                    I&apos;m a creative person with a natural desire to problem solve and take on challenges.
                    What interests me with web development, is the process of translating an idea into a fully functional site.
                </p>
                <p className="font-content text-sm mx-3 mt-1">
                    I have a strong interest in backend development and database creation/management.
                    Outside of web development, I have a keen interest in movies, board gaming, music both at home and live, seeing art exhibitions and writing poetry.
                </p>
                <p className="font-content text-sm mx-3 mt-2">
                    If you would like to get in contact with me about potential collaborations or any queries please contact me via the contact page.
                </p>
                
                <figure className="flex flex-row mt-5 mx-auto justify-center">
                    <img className="object-contain w-52 " src={myself} alt="A photo of my cat Patti and myself" />
                    <img className="object-contain w-52 " src={playing} alt="A photo of myself playing a board game" />
                </figure>
            </section>
        </main>
    )
}