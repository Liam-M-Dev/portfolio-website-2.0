import PropTypes from "prop-types"

export function CardDisplay(props) {
    
    
    return(
        <div className="border-box flex flex-row flex-wrap border-2 border-black w-40 p-1 mt-2 md:w-60 xl:w-80">
            <div>
                <img src={props.image} alt="project image" className="w-9/12 mx-auto" />
            </div>
            <div>
                <h3 className="font-heading">{props.title}</h3>
                <p className="font-content text-xs my-1">{props.description}</p>
                <a href={props.link} className="font-content italic underline">Repo</a>
            </div>
        </div>
    )
}

CardDisplay.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}