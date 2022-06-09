import React from 'react';

interface FooterProps {
  title: string;
}

const Footer: React.FC<FooterProps> = ({ title }) => {
  return (
    <div>
      <h1>Aqui é o Header</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Footer;
