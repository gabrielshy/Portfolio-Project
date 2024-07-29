import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaTimes, FaExpand } from 'react-icons/fa';

const Carousel = ({ items, projectId }) => {
  const [currentIndexes, setCurrentIndexes] = useState({});
  const [isFullScreen, setIsFullScreen] = useState(false);

  const currentIndex = currentIndexes[projectId] || 0;

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndexes((prevIndexes) => ({
      ...prevIndexes,
      [projectId]: (currentIndex + 1) % items.length,
    }));
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndexes((prevIndexes) => ({
      ...prevIndexes,
      [projectId]: (currentIndex - 1 + items.length) % items.length,
    }));
  };

  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsFullScreen(true);
  };

  const handleCloseFullScreen = (e) => {
    e.stopPropagation();
    setIsFullScreen(false);
  };

  const currentItem = items[currentIndex];

  return (
    <>
      <div className='relative'>
        <div className='w-full h-64 cursor-pointer' onClick={handleImageClick}>
          <div className='absolute flex justify-center top-2 right-2 h-[22px] w-[22px] bg-black bg-opacity-5 items-center rounded-full'>
            <FaExpand className='text-white' />
          </div>
          {currentItem ? (
            currentItem.endsWith('.mp4') ? (
              <video className='w-full h-full object-cover' controls>
                <source src={currentItem} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={currentItem} alt={`Slide ${currentIndex + 1}`} className='w-full h-full object-cover rounded-xl' />
            )
          ) : (
            <div className='w-full h-full flex items-center justify-center bg-gray-200 rounded-xl'>
              No media available
            </div>
          )}
        </div>
        {items.length > 1 && (
          <div className='flex justify-center mt-2'>
            <button onClick={handlePrev} className='bg-gray-800 text-white p-2 mx-2 rounded-full'>
              <FaArrowLeft />
            </button>
            <button onClick={handleNext} className='bg-gray-800 text-white p-2 mx-2 rounded-full'>
              <FaArrowRight />
            </button>
          </div>
        )}
        {items.length == 1 && (
          <div className='flex h-[32px] justify-center mt-2'>
          </div>
        )}
      </div>
      {isFullScreen && (
        <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 overflow-hidden'>
          <button
            className='absolute top-4 right-4 bg-gray-800 text-white p-2 rounded-full cursor-pointer'
            onClick={handleCloseFullScreen}
          >
            <FaTimes />
          </button>
          <img
            src={currentItem}
            alt={`Slide ${currentIndex + 1}`}
            className='max-w-full max-h-full' // Prevent stretching
          />
        </div>
      )}
    </>
  );
};

export default Carousel;
