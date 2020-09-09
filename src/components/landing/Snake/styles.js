import styled from 'styled-components';
import detailsIllustration from 'assets/illustrations/details.svg';

export const Wrapper = styled.div`
         display: flex;
         justify-content: center;
         margin-top: 50px;

         #snakeboard {
           opacity: 2;
           justify-content: center;
           position: relative;
         }

         #snakeboard2 {
           opacity: 0.4;
           justify-content: center;
           position: absolute;
         }

         #snakeboard3 {
           opacity: 0.3;
           justify-content: center;
           position: absolute;
         }

         @media (max-width: 768px) {
           #snakeboard, #snakeboard2, #snakeboard3 {
             display: none;
           }
         }

       `;
