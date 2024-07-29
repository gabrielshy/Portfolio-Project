import React from 'react';
import heroImage from '../../assets/heroimage.jpg';
import useVisibility from '../Hooks/UseVisibility';
import TailwindCSS from '../../assets/TailwindCSS.svg';
import PostgreSQL from '../../assets/PostgresSQL.svg';
import ReactSVG from '../../assets/React.svg';
import Python from '../../assets/Python.svg';
import Node from '../../assets/Node.js.svg';
import JavaScript from '../../assets/JavaScript.svg';
import Flask from '../../assets/Flask.svg';
import Firebase from '../../assets/Firebase.svg';
import Figma from '../../assets/Figma.svg';
import CPP from '../../assets/CPP.svg';
import C from '../../assets/C.svg';
import * as Icon from 'react-bootstrap-icons';
import resume from '../../assets/Francis Resume.pdf'

const About = () => {
  const [isVisible, aboutRef] = useVisibility();

  return (
    <div>
      <div
        ref={aboutRef}
        className={`h-[1500px] md:h-[1100px] flex flex-col items-center justify-center lg:flex-row transition-opacity duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 animate-fadeInUp' : 'opacity-0 animate-fadeOutDown'
        }`}
      >
        <div className='flex flex-col justify-center h-[800px] md:h-[400px] w-[50] md:w-[900px]'>
          <p className="font-textfont text-center text-[30px] mb-4 underline">About me</p>
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-around">
            <div className="h-[360px] w-[360px]">
              <img className="rounded-full h-full w-full object-cover" src={heroImage} alt="Hero" />
            </div>
            <div className="flex w-[300px] md:w-[500px] flex-col text-left m-8">
              <div className='flex flex-col items-center justify-center'>
                <p className="font-textfont text-center text-[20px] mb-2">I'm a Texas A&M University Student majoring in Electronic Systems Engineering Technology with a passion for Full Stack Software Engineering.</p>
                <p className="font-textfont text-center text-[20px] mb-4">I thrive on creating real-world, deployable projects that make a tangible impact on clients and their communities!</p>
                <div>
                  <a
                    href={resume}
                    download
                    className="flex items-center pt-1 justify-center h-[50px] w-[140px] border border-black rounded-full text-black transition-transform transform hover:scale-[1.1] active:scale-[0.9]"
                  >
                    <div className='flex flex-row'>
                      <Icon.Stars size={25} color='#FFD700' className=''/><pre className="font-textfont text-[20px]">  Resume</pre>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <p className="font-textfont text-[20px]">My Tech Stack  </p>
            <div className='bg-secondary h-[1px] w-[300px] md:w-[600px]'></div>
            <div className='flex flex-wrap items-center justify-center mt-4'>
              <img src={ReactSVG} alt="React" className='m-2 h-10 w-10' />
              <img src={TailwindCSS} alt="Tailwind CSS" className='m-2 h-10 w-10' />
              <img src={Node} alt="Node.js" className='m-2 h-10 w-10' />
              <img src={Python} alt="Python" className='m-2 h-10 w-10' />
              <img src={CPP} alt="C++" className='m-2 h-10 w-10' />
              <img src={C} alt="C" className='m-2 h-10 w-10' />
            </div>
            <div className='flex flex-wrap items-center justify-center mt-4'>
              <img src={JavaScript} alt="JavaScript" className='m-2 h-10 w-10' />
              <img src={Flask} alt="Flask" className='m-2 h-10 w-10' />
              <img src={Firebase} alt="Firebase" className='m-2 h-10 w-10' />
              <img src={PostgreSQL} alt="PostgreSQL" className='m-2 h-10 w-10' />
              <img src={Figma} alt="Figma" className='m-2 h-10 w-10' />
            </div>
          </div>
          <div className='flex flex-col mt-10'>
            <div className=''>
              <div className=''>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
