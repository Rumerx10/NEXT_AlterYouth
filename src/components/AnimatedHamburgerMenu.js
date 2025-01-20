import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';

const AnimatedHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Hamburger toggled={isOpen} toggle={toggleMenu} color="#1dc468" size={22} />
    </div>
  );
};

export default AnimatedHamburgerMenu;
