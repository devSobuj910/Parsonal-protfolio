import React, { useEffect, useState } from 'react';
import Project from "../Projects/Project"

const Projects = () => {
    const [projects,setProjects]=useState([]);

// console.log(projects)


    useEffect(()=>{
fetch("data.json")
.then(res=>res.json())
.then(data=>setProjects(data))
    },[projects])


    return (
        <div className='my-24 px-9'>
            <h1 className='text-3xl capitalize bold text-center'>latest project</h1>
            <h3 className='text-center my-3 capitalize  text-xl'>here is my  own latest projects</h3>
            {/* <Project></Project> */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
                {projects.map(project=><Project key={project._id} project={project} ></Project>)}
            </div>
                    <button className='btn btn-outline my-5 mx-auto block'>More Projects</button>
        </div>
    );
};

export default Projects;