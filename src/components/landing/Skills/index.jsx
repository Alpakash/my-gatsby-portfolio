import React, { useContext, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m Akash a Frontend developer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Skills & interests</h1>
          <p>
            The ME(R/V)N- and JAM Stack are my focus at the moment. I would love to grow into a technical product owner.
          </p>
          <em>JavaScript, React, VueJS, NodeJS, GraphQL</em>
          <div>
            <Button alignRight as={AnchorLink} href="#resume">
              Resume
            </Button>
          </div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
