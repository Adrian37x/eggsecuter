import axios from "axios";
import { useEffect, useState } from "react";
import Project from '../../components/project/project';

function Projects(props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get(`./data/projects.json`)
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <h1>Projects</h1>
            <p>All my projects that I deployed are listed here...</p>

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Version</td>
                        <td>Domain</td>
                        <td>Git</td>
                        <td>Tags</td>
                        <td>Logs</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        (props.limit ? projects.slice(0, props.limit) : projects).map(item => (
                            <Project key={item.name} project={item} />
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default Projects;
