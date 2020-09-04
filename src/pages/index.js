import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Contact, Projects } from 'components/landing';
import { Resume } from 'components/landing/Resume';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Projects />
    <Resume />
    <Contact />
  </Layout>
);
