import React from 'react';
import { Grid, Container } from '@mui/material';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

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
      <Grid container sx={{ marginTop: '100px', marginBottom: '50px' }}>
        <Grid item>
          <Container>
            <Component />
          </Container>
        </Grid>
      </Grid>
      <Footer copyright="Desenvolvido para o programa Starter da Growdev." />
    </>
  );
};

export default Layout;
