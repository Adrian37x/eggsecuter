import axios from "axios";
import { useEffect, useState } from "react";

function Projects() {
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
        <ul>
            {
                projects.map(item => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))
            }
        </ul>
    );
}

export default Projects;
