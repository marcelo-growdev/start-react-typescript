import { Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContainerStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: '300px',
}));

export { ContainerStyled };
