import styled from 'styled-components';

export const WordPressButton = styled.div`
         display: flex;
         justify-content: center;
         align-items: center;
         margin-top: 40px;

         a {
           font-size: 1.5rem;
           padding: 1rem 3rem;
           color: grey;
           text-transform: uppercase;
           box-shadow: 5px 3px 6px 0 rgba(0, 0, 0, 0.11);
         }
       `;

export const Wrapper = styled.div`
         padding: 2rem 0;

         .btn {
           text-decoration: none;
           position: relative;
           overflow: hidden;
           border-radius: 20px;
         }

         .btn:before {
           content: '';
           position: absolute;
           top: 0;
           left: -100%;
           width: 100%;
           height: 100%;
           background: linear-gradient(
             120deg,
             transparent,
             rgba(0, 116, 217, 0.4),
             transparent
           );
           transition: all 650ms;
         }

         .btn:hover:before {
           left: 100%;
         }
       `;

export const Grid = styled.div`
         display: grid;
         align-items: center;
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: 8fr;
         gap: 1.2rem 1.2rem;

         @media (max-width: 960px) {
           grid-template-columns: repeat(2, 1fr);
         }

         @media (max-width: 680px) {
           grid-template-columns: 1fr;
         }
       `;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.11);

  h4 {
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};
  }

  p {
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#c7c7c7')};
  }
`;

export const Content = styled.div`
  padding: 1rem 0;
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    &:first-child {
      margin-right: 0.5rem;
    }

    img {
      margin: 0;
    }

    svg path {
      fill: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
    }

    span {
      color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
      margin-left: 0.5rem;
    }
  }
`;
