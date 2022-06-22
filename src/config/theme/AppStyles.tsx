import React from 'react';
import { GlobalStyles } from '@mui/material';

const AppStyles: React.FC = () => {
  const defaultStyles = {
    body: {
      margin: 0,
    },
    a: {
      color: 'inherit' /* blue colors for links too */,
      textDecoration: 'inherit' /* no underline */,
    },
  };
  return <GlobalStyles styles={defaultStyles} />;
};

export default AppStyles;
