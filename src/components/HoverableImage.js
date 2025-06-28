import "../styles/Projects.css"
export default function HoverableImage({image, title, description, link, technologies}) {
    return (
        <div className="image-container">
            <img className="project-image"src={image}></img>
            <div className="button-overlay">
                <a className="github-link" target="_blank" rel="noopener noreferrer" href={link}>      
                    <img src="/github.svg"></img>
                    <h2>Github</h2>
                </a>
                <div className="technologies">
                    {technologies.map((src, index) => <img src={src} alt={`Image ${index + 1}`} key={index}></img>)}
                </div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
        
    )
}