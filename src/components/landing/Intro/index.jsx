import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import IntroImg from 'assets/react-svgs/Work';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="intro">
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi there, human!</h1>
          <h4>
            I’m <em>Akash</em> a Frontend developer!
          </h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <IntroImg hairColor="#000" skinColor="#a85400" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
