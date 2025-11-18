import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      &copy; {currentYear} Joseph Pipitone. All rights reserved.
    </footer>
  );
};

export default Footer;