import "../styles/Experience.css"

export default function Timeline({ data }) {
    return (
        <div className="timeline">
            {data.map((entry, index) =>
                <div key={index} className="timeline-item">
                    <div className="timeline-content">
                        <h2>{entry.title}</h2>
                        <p>{entry.company}</p>
                        <p>{entry.date}</p>
                        <p>{entry.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};