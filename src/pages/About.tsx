import React from 'react';
import { Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import { IUser } from '../store/modules/user/reducer';

const About: React.FC = () => {
  const userRedux: IUser = useSelector((state: IUser) => state.user);
  return (
    <div>
      <Typography variant="h3">{userRedux.user}</Typography>
      <Typography variant="h1">Sobre</Typography>
    </div>
  );
};

export default About;
