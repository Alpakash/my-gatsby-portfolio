import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Snake} from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <div className="hide-title-mobile">
      <center>
        <h2>Random snakes appeared! Press W, A, S or D!</h2>
        <p>
          Source code @ <strong><a target="_blank" href="https://github.com/Alpakash/snake-in-js">snake-in-js (GitHub)</a></strong>
        </p>
      </center>
    </div>
    <Snake />
    <Skills />
    <Projects />
    <Contact />
  </Layout>
);
