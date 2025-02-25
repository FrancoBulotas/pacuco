

import React from 'react';

const LoadingImg = () => {
  return (
    <div style={styles.loadingContainer}>
      <div style={styles.spinner}></div>      
    </div>
  );
};

const styles = {
  loadingContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margintop: '80px',
    height: '40vh',
    flexDirection: 'column',
  },
  spinner: {
    width: '30px',
    height: '30px',
    border: '4px solid #f3f3f3',
    borderRadius: '50%',
    // borderTop: '4px solid #3498db',
    borderTop: '4px solid gray',
    animation: 'spin 2s linear infinite',
  },
};

export default LoadingImg;