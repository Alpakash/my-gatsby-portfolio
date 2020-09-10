import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Sidebar = ({ sidebar, toggle }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper active={sidebar} theme={theme}>
      <div onClick={() => toggle(!sidebar)}>
        <NavbarLinks onClick={() => toggle(!sidebar)} />
      </div>
    </Wrapper>
  );
};

export default Sidebar;
