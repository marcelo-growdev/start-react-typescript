import React from 'react';
import { Grid, Container } from '@mui/material';
import Header from '../../components/header/Header';

interface LayoutPros {
  component: React.FC;
}

const Layout: React.FC<LayoutPros> = ({ component: Component }) => {
  const menu = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'Sobre' },
    { path: '/contact', label: 'Contato' },
  ];
  return (
    <>
      <Header menu={menu} settings={['Conta', 'Configurações', 'Sair']} />
      <Grid container sx={{ marginTop: '60px' }}>
        <Grid item>
          <Container>
            <Component />
          </Container>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
