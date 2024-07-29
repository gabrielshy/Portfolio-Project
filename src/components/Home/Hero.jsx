import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import useVisibility from '../Hooks/UseVisibility';
import TypewriterComponent from '../Hooks/Typewriter'; // Import the TypewriterComponent

const Hero = () => {
  const [isVisible, heroRef] = useVisibility();

  return (
    <div 
      ref={heroRef}
      className={`h-[100vh] flex flex-col items-center justify-center lg:flex-row transition-opacity duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
      }`}
    >
      <div className="flex items-center justify-center h-[700px] w-[300px] md:w-[700px]">
        <div className="flex flex-col text-center justify-center">
          <div className='flex flex-row items-center justify-center'>
            <p className="font-textfont text-[50px]">Hello,</p>
          </div>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <p className="font-textfont text-[50px]">I'm Francis</p>
            <pre className='h-1 w-3'> </pre>
            <p className="font-textfont text-[50px] md:mt-0">Gabriel Anos</p>
            <Icon.Stars size={50} color='#FFD700' className='mb-4 md:mb-0 pl-0 md:pl-2'/>
          </div>
          <div className='flex flex-col md:flex-row items-centers justify-center'>
            <pre className="font-bold text-2xl font-mono">Aspiring </pre>
            <TypewriterComponent />
          </div>
          
          <div className='flex justify-center items-center'>
            <div className='bg-secondary h-[1px] w-[200px] mt-4'></div>
          </div>
          <div className='flex items-center justify-center mt-4'>
            <div className='w-[200px] flex flex-row justify-between'>
              <a href="www.linkedin.com/in/francis-g-anos" className='hover:scale-[1.1] active:scale-[0.9] transition-all' target='blank'>
                <Icon.Linkedin size={40}/>
              </a>
              <a href="https://github.com/gabrielshy" className='hover:scale-[1.1] active:scale-[0.9] transition-all' target='blank'>
                <Icon.Github size={40}/>
              </a>
              <a href="https://www.instagram.com/gabriels.hy?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className='hover:scale-[1.1] active:scale-[0.9] transition-all' target='blank'>
                <Icon.Instagram size={40}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
