import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
    <br/><br/>
      <AnchorLink href="#intro">
        <strong>HOME</strong>
      </AnchorLink>
      <AnchorLink href="#skills">
        <strong>SKILLS</strong>
      </AnchorLink>
      <AnchorLink href="#projects">
        <strong>PROJECTS</strong>
      </AnchorLink>
      <a href="https://www.veggiecoder.com" target="_blank">
        <strong>BLOG</strong>
      </a>
      <AnchorLink href="#contact">
        <strong>CONTACT</strong>
      </AnchorLink>
    </Wrapper>
  );
};

export default NavbarLinks;
