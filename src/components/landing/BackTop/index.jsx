import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Chevron from 'assets/svgs/up-chevron.inline.svg';
import styled from 'styled-components';

const BackToTop = styled(AnchorLink)`
  position: fixed;
  right: 5vh;
  bottom: 5vh;
`;

export const BackTop = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <>
      {show && (
        <BackToTop href="#intro">
          <Chevron width="50px" />
        </BackToTop>
      )}
    </>
  );
};
