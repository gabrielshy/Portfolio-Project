import React, { useState } from 'react';
import useVisibility from '../Hooks/UseVisibility';
import ProjectTemplate from './ProjectTemplate';
import ProjectData from './ProjectData';

const Projects = () => {
  const [isVisible, aboutRef] = useVisibility();
  const [selectedTab, setSelectedTab] = useState('Web');

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const filteredProjects = ProjectData.filter((project) => project.type === selectedTab);

  return (
    <div>
      <p className="font-textfont text-center text-[30px] mb-4 underline">Projects</p>
      <div className='flex justify-center my-4'>
        {['Web', 'Software', 'Hardware'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 mx-2 rounded ${selectedTab === tab ? 'bg-accent text-white' : 'bg-primary'}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div
        ref={aboutRef}
        className={`transition-opacity duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 animate__animated animate__fadeInUp' : 'opacity-0'
        }`}
      >
        <div className='my-10 flex flex-wrap justify-center'>
          {filteredProjects.map((project) => (
            <ProjectTemplate
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              showcase={project.showcase}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
