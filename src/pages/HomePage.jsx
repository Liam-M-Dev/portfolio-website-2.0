import liamlogo from "../assets/liamlogo2.png"


export default function HomePage(){

    return(
        
        <main className="container box-border mx-auto">
            <section className="flex flex-col justify-between gap-y-2.5 lg:gap-y-0 items-center">
                <h1 className="font-heading font-bold mt-5 text-center text-2xl md:text-3xl md:mt-10 lg:mt-5">
                    Liam Massey
                </h1>

                <figure className="max-w-screen">
                    <img className="my-10 lg:my-5 w-11/12 md:w-10/12 mx-auto" src={liamlogo} alt="Logo for Liam Massey web development, acts as homepage button" />
                </figure>

                <h3 className="font-heading mt-5 lg:mt-5 mb-5 text-center text-lg md:text-2xl">Full Stack Developer</h3>
            </section>
        </main>
        
        
    )
}