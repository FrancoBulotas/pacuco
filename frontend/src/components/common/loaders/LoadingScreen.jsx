
import React from 'react';
import { HashLoader } from 'react-spinners';

const LoadingScreen = () => {
  return (
    <div className='spinner-container'><HashLoader color='#ffc8c8' size={30} /></div>
    // <div style={styles.loadingContainer}>
    //   <div style={styles.spinner}></div>      
    // </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  spinner: {
    width: '30px',
    height: '30px',
    border: '4px solid #f3f3f3',
    borderRadius: '50%',
    // borderTop: '4px solid #3498db',
    borderTop: '4px solid pink',
    animation: 'spin 2s linear infinite',
  },
};

export default LoadingScreen;