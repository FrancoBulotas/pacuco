
import React from 'react';
import { ClipLoader } from 'react-spinners';
import { HashLoader } from 'react-spinners';


const LoadingImages = () => {
  return (
    <div className='spinner-container'><HashLoader color='#ffc8c8' size={24} speedMultiplier={0.4} /></div>
  );
};

export default LoadingImages;