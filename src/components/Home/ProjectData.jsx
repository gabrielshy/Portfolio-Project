import Project1_1 from '../../assets/Projects/Project_1/Screenshot_5.png'
import Project1_2 from '../../assets/Projects/Project_1/Screenshot_6.png'
import Project1_3 from '../../assets/Projects/Project_1/Screenshot_7.png'

import Project2_1 from '../../assets/Projects/Project_2/screenshot_1.png'

import Project5_1 from '../../assets/Projects/Project_5/Screenshot_1.png'
import Project5_2 from '../../assets/Projects/Project_5/Screenshot_2.png'
import Project5_3 from '../../assets/Projects/Project_5/Screenshot_3.png'

import Project6_1 from '../../assets/Projects/Project_6/Screenshot_1.png'
import Project6_2 from '../../assets/Projects/Project_6/Screenshot_2.png'
import Project6_3 from '../../assets/Projects/Project_6/Screenshot_3.png'

import Project7_1 from '../../assets/Projects/Project_7/Screenshot_1.png'
import Project7_2 from '../../assets/Projects/Project_7/Video_1.mp4'
import Project7_3 from '../../assets/Projects/Project_7/Video_2.mp4'

import Project9_1 from '../../assets/Projects/Project_9/Screenshot_1.png'
import Project9_2 from '../../assets/Projects/Project_9/Screenshot_2.png'

import Project10_1 from '../../assets/Projects/Project_10/Screenshot_1.png'
import Project10_2 from '../../assets/Projects/Project_10/Screenshot_2.png'
import Project10_3 from '../../assets/Projects/Project_10/Screenshot_3.png'

const ProjectData = [
    {
      id: 1,
      title: 'Tkinter Type Racer',
      description: 'This tkinter based typing game was created to practice my OOP and GUI skills',
      technologies: ['Python'],
      showcase: [Project1_1, Project1_2, Project1_3],
      type: 'Software',
      link: 'https://github.com/gabrielshy/Tkinter-Type-Racer.git'
    },
    {
        id: 2,
        title: 'HEIC to PNG Converter',
        description: 'This is an HEIC to PNG converter! I made this because I needed to submit a pdf for class, however the images i took on my phone formatted HEIC and incompatible with Word. All the converters I found costed money, which is why I coded it instead!',
        technologies: ['Python'],
        showcase: [Project2_1],
        type: 'Software',
        link: 'https://github.com/gabrielshy/HEIC-to-PNG-converter-exe.git'
    },
    {
        id: 3,
        title: 'Stock Tracker and Notifier',
        description: 'This program tracks the current price of set stocks and notifies the user on whether a stock passes an upper or lower limit price!',
        technologies: ['Python'],
        showcase: [Project5_1, Project5_2, Project5_3],
        type: 'Software',
        link: 'https://github.com/gabrielshy/Stock-Tracker---Notifier.git'
    },
    {
        id: 4,
        title: 'StudentPluh',
        description: 'This website hosts several different resources made for students. My friend and I created this website to help students find helpful resources that they can use to better their college or even high school experience! Won top 160/700+ submissions at NorCalHacks/ EduSands!',
        technologies: ['HTML/CSS', 'JavaScript', 'Firebase'],
        showcase: [Project6_1, Project6_2, Project6_3],
        type: 'Web',
    },
    {
        id: 5,
        title: 'MSP432 Interface',
        description: 'ESET 269 Final Project. Created a menu interface which controls MSP432 microcontroller parts. The menu is able to blink lights, read temperatures, and read buttons pressed.',
        technologies: ['Embedded C'],
        showcase: [Project7_1, Project7_2, Project7_3],
        type: 'Hardware',
    },
    {
        id: 6,
        title: 'KuyaWalds',
        description: 'For a university Hackathon, myself and a friend, built this website for a local Filipino restaurant KuyaWalds! This project took less than 8 hours, and will be upgraded in the future!',
        technologies: ['React.JS', 'TailwindCSS', 'HTML/CSS', 'Firebase'],
        showcase: [Project9_1, Project9_2],
        type: 'Web',
        link: 'https://kuyawalds.com/'
    },
    {
        id: 7,
        title: 'PhilSA Website',
        description: 'As part of my Webmaster/ Marketing officer role in PhilSA, I designed and deployed this website! This project was built from scratch using React.js, Tailwind CSS, Vite, and Figma!',
        technologies: ['React.JS', 'TailwindCSS', 'HTML/CSS', 'Firebase'],
        showcase: [Project10_1, Project10_2, Project10_3],
        type: 'Web',
        link: 'https://tamuphilsa.org/'
    }
  ];
  
  export default ProjectData;
  