import React from 'react';
import { Layout, SEO } from 'components/common';
import {
  Intro,
  Skills,
  Contact,
  Projects,
  Snake,
  Hobbies
} from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Projects />
    <Skills />
    <Hobbies />
    <div className="hide-title-mobile center">
      <center>
        <h2>Random snakes appeared! Press W, A, S or D!</h2>
        <p>
          Source code @{' '}
          <strong>
            <a target="_blank" href="https://github.com/Alpakash/snake-in-js">
              snake-in-js (GitHub)
            </a>
          </strong>
        </p>
      </center>
    </div>
    <Snake />
    <Contact />
  </Layout>
);
