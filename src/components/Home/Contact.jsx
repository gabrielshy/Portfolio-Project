import React from 'react'
import * as Icon from 'react-bootstrap-icons';

const Contact = () => {
  return (
    <div className='flex flex-col h-[250px] w-full mt-[250px] items-center justify-start'>
        <p className='font-textfont text-[50px]'>Contact Me!</p>
        <p className='font-textfont text-[15px] wt-[40px]'>anosfra21@gmail.com</p>
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
  )
}

export default Contact