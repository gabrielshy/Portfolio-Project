import React from 'react';
import { FaLink } from 'react-icons/fa';
import Carousel from './Carousel';

const ProjectTemplate = ({ id, title, description, technologies, showcase, link }) => {
  return (
    <div className='max-w-md w-full bg-white p-4 m-4 rounded-lg shadow-lg flex flex-col justify-between'>
      <div>
        <h2 className='text-xl font-bold font-textfont mb-2'>{title}</h2>
        <p className='text-gray-700 mb-2'>{description}</p>
        {link && (
            <a href={link} className='text-blue-500 font-textfont' target='_blank' rel='noopener noreferrer'>
              <FaLink className='inline mr-1' /> View Project
            </a>
          )}
      </div>
      <div>
        <Carousel items={showcase} projectId={id} />
        <div className='mt-4 flex justify-between items-center flex-wrap'>
          <div className='flex flex-wrap'>
            {technologies.map((tech, index) => (
              <span key={index} className='inline-block bg-gray-200 rounded-full px-3 my-1 py-1 text-sm font-semibold font-textfont text-gray-700 mr-2'>
                {tech}
              </span>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;
