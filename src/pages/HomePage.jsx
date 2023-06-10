import liamlogo from "../assets/liamlogo.png"


export default function HomePage(){

    return(
        
        <main className="container box-border mx-auto">
            <section className="flex flex-col justify-between items-center">
                <h1 className="font-heading mt-5 text-center text-2xl">
                    Liam Massey
                </h1>

                <figure className="max-w-screen">
                    <img className="w-3/5 mx-auto" src={liamlogo} alt="Logo for Liam Massey web development, acts as homepage button" />
                </figure>

                <h3 className="font-heading mt-5 mb-5 text-center text-lg">Full Stack Developer</h3>
            </section>
        </main>
        
        
    )
}