import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects, Snake} from 'components/landing';

export default () => (
    <Layout>
      <SEO />
      <Intro />
      <Snake />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
);
