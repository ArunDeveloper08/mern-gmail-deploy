import { Box, Typography } from '@mui/material';
import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorComponent = () => {
    const error = useRouteError();
  return (
    <Box style={{marginLeft:250}}>
 <Typography>There was an error loading Page</Typography>
    </Box>
  )
}

export default ErrorComponent;