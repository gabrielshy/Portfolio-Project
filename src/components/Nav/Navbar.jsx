import React, { useState, useEffect, useRef } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={`fixed w-full bg-primary p-4 font-textfont z-50`}>
      <nav className="flex items-center justify-center">
        <div className="flex items-center space-x-4">
          {['about', 'projects', 'contact'].map((item) => (
            <ScrollLink
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className={`cursor-pointer font-textfont font-bold uppercase hover:scale-[1.1] active:scale-[0.9] transition-all`}
            >
              {item}
            </ScrollLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
