
import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const LoadingLinear = () => {
  
    return (
    <Box sx={{ width: '70%', margin:'auto' }}>
      <LinearProgress color='inherit' />
    </Box>
  );
}

export default LoadingLinear