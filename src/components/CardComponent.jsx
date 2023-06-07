import PropTypes from "prop-types"

export function CardDisplay(props) {
    
    
    return(
        <div>
            <div>
                <img src={props.image} alt="project image" />
            </div>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link}>Repo</a>
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