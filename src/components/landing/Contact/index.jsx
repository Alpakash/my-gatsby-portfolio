import React from 'react';
import { Container } from 'components/common';
import ContactImg from 'assets/react-svgs/ContactImg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
         <Wrapper as={Container} id="contact">
           <Details>
             <h2>Let's get in touch</h2>
             <ContactForm />
           </Details>
           <Thumbnail>
             <ContactImg
               hairColor="#000"
               skinColor="#a85400"
               tieColor="rgb(0, 176, 255)"
               leaveColors="rgb(0, 176, 255)"
               background="#3636FF"
             />
           </Thumbnail>
         </Wrapper>
       );
