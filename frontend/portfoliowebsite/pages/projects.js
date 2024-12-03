// import axios from 'axios';
import { useEffect, useState } from 'react';
const Projects = () => {
const [projects, setProjects] = useState([]);
useEffect(() => {
axios
.get(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
.then((response) => setProjects(response.data))
.catch((error) => console.error(error));
}, []);
return (
<div>
<h1>My Projects</h1>
<ul>
{projects.map((project) => (
<li key={project.id}>{project.name}</li>
))}
</ul>
</div>
);
};
export default Projects;