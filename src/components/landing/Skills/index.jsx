import React, { useContext, useState } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import SkillsImg from 'assets/svgs/SkillsImg';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <SkillsImg
            hairColor="#000"
            skinColor="#a85400"
            boardColor="#e0e0e0"
          />
        </Thumbnail>
        <Details theme={theme}>
          <h1>Skills & interests</h1>
          <p>
            The ME(R/V)N- and JAM Stack are my focus at the moment. I would love
            to grow into a product owner with deep technical understanding.
          </p>
          <strong>Frontend: </strong>
          <em>JavaScript, React, VueJS, NodeJS, Express, Laravel </em>
          <br />
          <br />
          <strong>Backend:</strong>
          <em>GraphQL, MongoDB, MySQL, AWS, Azure, TeamCity</em>
          <br />
          <br />
          <strong>Other: </strong>
          <em>
            Adobe XD, Figma, Adobe Illustrator, Adobe Photoshop, WordPress
          </em>
          <div>
            <br />
            <br />
            <Link
              to={{
                pathname:
                  "https://drive.google.com/file/d/1eiyuvsv3v1pUGATDbwrXCVN7PT3k80Yb/view",
              }}
              target="_blank"
            >
              <Button alignRight>Resume</Button>
            </Link>
          </div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
