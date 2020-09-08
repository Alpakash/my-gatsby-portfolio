import React from 'react';
import { Container } from '../../../components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

interface Social {
  id: number;
  name: string;
  link: string;
  icon: string;
}

export const Footer = () => (
         <Wrapper>
           <Flex as={Container}>
             <Details>
               <h2>Akash Soedamah</h2>
               <span>
                 © All rights are reserved | {new Date().getFullYear()} | Made
                 with{' '}
                 <span aria-label="love" role="img">
                   💖
                 </span>
                 , Gatsby, React and deployed with Vercel.
               </span>
               <br />
               <br />
               Also checkout my blog{' '}
               <strong>
                 <a href="https://www.veggiecoder.com" target="_blank">
                   VeggieCoder
                 </a>
               </strong>
             </Details>
             <Links>
               <span>Follow me on </span>
               {social.map(({ id, name, link, icon }: Social) => (
                 <a
                   key={id}
                   href={link}
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={`follow me on ${name}`}
                 >
                   <img width="24" src={icon} alt={name} />
                 </a>
               ))}
             </Links>
           </Flex>
         </Wrapper>
       );
