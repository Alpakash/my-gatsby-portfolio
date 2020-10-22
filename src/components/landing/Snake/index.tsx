import React, { useEffect, useState, FunctionComponent } from 'react';
import { Container } from '../../common';
// @ts-ignore
import ScriptTag from 'react-script-tag';
import styled from 'styled-components';
import { Wrapper } from './styles';

interface Measures {
  width: number | undefined;
  height: number | undefined;
}

export const Snake = () => {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
        <ScriptTag
          type="text/javascript"
          src={require('../Snake/snakeLogic1.ts')}
        />;

        <ScriptTag
          type="text/javascript"
          src={require('../Snake/snakeLogic2.ts')}
        />;

        <ScriptTag
          type="text/javascript"
          src={require('../Snake/snakeLogic3.ts')}
        />;


    // Handler to call on window resize
    function handleResize() {
      // Set window width to state
      setWindowSize({
        width: document.documentElement.offsetWidth,
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount


  return (
      <Wrapper>
        <canvas id="snakeboard" width="752" height="500" />
        <canvas id="snakeboard2" width="752" height="500" />
        <canvas id="snakeboard3" width="752" height="500" />
      </Wrapper>
  );
};
