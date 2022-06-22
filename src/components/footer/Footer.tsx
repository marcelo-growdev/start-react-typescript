import React from 'react';
import { ContainerStyled } from './Styleds';

interface FooterProps {
  copyright: string;
}

const Footer: React.FC<FooterProps> = ({ copyright }) => {
  return <ContainerStyled container />;
};

export default Footer;
