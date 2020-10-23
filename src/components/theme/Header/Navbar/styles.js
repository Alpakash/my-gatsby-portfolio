import styled from 'styled-components';

export const Wrapper = styled.div`
         position: fixed;
         background-color: #fff;
         z-index: 1;
         display: flex;
         align-items: center;
         justify-content: space-around;
         box-shadow: 5px 3px 6px 0 rgba(0, 0, 0, 0.11);
         width: 100%;
       `;

export const Brand = styled.a`
  color: '#000';

  @media (max-width: 960px) {
    mix-blend-mode: 'unset';
  }
`;
