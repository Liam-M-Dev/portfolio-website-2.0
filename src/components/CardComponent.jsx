

export function CardDisplay(img, title, description, link) {
    
    
    return(
        <div>
            <div>
                <img src={img} alt="project image" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Repo</a>
            </div>
        </div>
    )
}