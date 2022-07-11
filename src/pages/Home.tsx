import React from 'react';
import { Grid, Typography, Container } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from '../store/modules/user/actions';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  dispatch(login({ user: 'teste', password: 'teste' }));

  return (
    <Grid container>
      <Grid item>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a modi
          quisquam reiciendis libero ab corporis sequi adipisci alias nam,
          eligendi rerum illum placeat ut. Quis vitae molestias quibusdam modi?
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic a modi
          quisquam reiciendis libero ab corporis sequi adipisci alias nam,
          eligendi rerum illum placeat ut. Quis vitae molestias quibusdam modi?
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Home;
