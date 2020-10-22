import styled from 'styled-components';

export const Wrapper = styled.div`
         padding: 4rem 0;
         display: flex;
         justify-content: center;
         flex-direction: row;
         flex-wrap: wrap;

         @media (max-width: 960px) {
           flex-direction: column;
         }

         h2 {
           margin-top: 20px;
         }
       `;

       
export const PersonalCard = styled.div`
         @media (min-width: 961px) {
           margin: 10px 10px;
           width: 30%;
         }
         padding: 50px 0;
         margin: 10px 0;
         float: left;
         text-align: center;
         border: 3px solid #f2f2f2;
         border-radius: 20px;
       `;
