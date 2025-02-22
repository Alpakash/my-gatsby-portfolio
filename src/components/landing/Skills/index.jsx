import React, { useEffect } from 'react';
import { Container, Button } from 'components/common';
import SkillsImg from 'assets/react-svgs/SkillsImg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <SkillsImg
            hairColor="#000"
            skinColor="#a85400"
            boardColor="#e0e0e0"
          />
        </Thumbnail>
        <Details>
          <h2>Skills & interests</h2>
          <p>
            The ME(R/V)N- and JAM Stack are my focus at the moment. I would love
            to grow into a product owner with deep technical understanding.
          </p>
          <strong>Frontend: </strong>
          <em>
            JavaScript, TypeScript, React, VueJS, NodeJS, Express, Laravel
          </em>
          <br />
          <br />
          <strong>Backend:</strong>
          <em>GraphQL, MongoDB, MySQL, AWS, Azure DevOps, TeamCity</em>
          <br />
          <br />
          <strong>Other: </strong>
          <em>
            Adobe XD, Figma, Adobe Illustrator, Adobe Photoshop, WordPress
          </em>
          <div>
            <br />
            <br />
            <a
              href="https://drive.google.com/file/d/10YMgXx2X1U0qenEvYpEXkZF0D8nv8EvU/view?usp=sharing"
              target="_blank"
            >
              <Button alignRight>Résumé</Button>
            </a>
          </div>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
