import myself from "../assets/myself-patti.jpg"
import playing from "../assets/playing-game.jpg"

export function AboutPage(){

    return(
        <main>
            <section>
                <h1>
                    About Me
                </h1>

                <p>
                    My name is Liam and I'm a <strong>junior full stack web developer</strong>.
                    I'm a creative person with a natural desire to problem solve and take on challenges.
                    What interests me with web development, is the process of translating an idea into a fully functional site.
                    I have a strong interest in backend development and database creation/management.
                    Outside of web development, I have a keen interest in movies, board gaming, music both at home and live, seeing art exhibitions and writing poetry.
                    If you would like to get in contact with me about potential collaborations or any queries please contact me via the contact page.
                </p>
                
                <figure>
                    <img src={myself} alt="A photo of my cat Patti and myself" />
                </figure>
                <figure>
                    <img src={playing} alt="A photo of myself playing a board game" />
                </figure>
            </section>
        </main>
    )
}