import React, { useEffect } from 'react'
import { useState } from 'react'
import Project from '../Project/Project'

const Projects = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    fetch('https://front-end-developer-server.vercel.app/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
  }, [])
  return (
    <div id='projects'>
      <div
        className='font-color text-center py-4 px-3'
        data-aos='zoom-out-right'
      >
        <h1 className='text-3xl md:text-5xl font-bold py-4'>Projects</h1>
        <p className='text-2xl md:text-3xl'>Things I’ve built so far</p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 justify-items-center items-center m-10'>
        {projects?.map((project) => (
          <Project project={project} key={project._id}></Project>
        ))}
      </div>
    </div>
  )
}

export default Projects
