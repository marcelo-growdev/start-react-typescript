import React from 'react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div>
      <h1>Aqui é o Header</h1>
      <h2>{title}</h2>
    </div>
  );
};

export default Header;
