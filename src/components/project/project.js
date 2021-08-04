function Project(props) {
    const project = props.project;

    return (
        <tr>
            <td>{project.name}</td>
            <td>{project.description}</td>
            <td>{project.version}</td>

            <td>
                {
                    project.domain &&
                    <a href={project.domain} target="_blank" rel="noreferrer">
                        {project.domain} <i className="bi bi-arrow-up-right-square"></i>
                    </a>
                }
            </td>

            <td>
                {
                    project.git ?
                    <a href={project.git} target="_blank" rel="noreferrer">
                        {project.git} <i className="bi bi-arrow-up-right-square"></i>
                    </a> :
                    "Private"
                }
            </td>

            <td>
                <div style={{maxWidth: "200px", display: "flex", flexWrap: "wrap"}}>
                    {
                        project.tags.map(item => (
                            <div key={item} className="badge">
                                {item}
                            </div>
                        ))
                    }
                </div>
            </td>

            <td>In development...</td>
        </tr>
    );
}

export default Project;