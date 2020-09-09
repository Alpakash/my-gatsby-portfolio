import React, { useEffect } from 'react';
import { Container, Button } from 'components/common';
import SkillsImg from 'assets/svgs/SkillsImg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import ScriptTag from 'react-script-tag';

export const Skills = () => {
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
              href="https://drive.google.com/file/d/1eiyuvsv3v1pUGATDbwrXCVN7PT3k80Yb/view"
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
