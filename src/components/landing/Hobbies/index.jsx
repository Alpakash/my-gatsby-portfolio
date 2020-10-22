import React from 'react';
import { Wrapper, PersonalCard } from './styles';
import { Container } from 'components/common';
import Food from 'assets/svgs/healthy-food.inline.svg';
import Graduate from 'assets/svgs/graduate.inline.svg';
import Pin from 'assets/svgs/pin.inline.svg';
import Barbell from 'assets/svgs/barbell.inline.svg';
import Joystick from 'assets/svgs/game-controller.inline.svg';
import Beach from 'assets/svgs/beach.inline.svg';

export const Hobbies = () => (
         <>
           <Wrapper as={Container}>
             <PersonalCard>
               <Pin width="100px" />
               <h2>Born and raised</h2>
               <p>Amsterdam, The Netherlands</p>
             </PersonalCard>

             <PersonalCard>
               <Food width="100px" />
               <h2>Cook delicious food</h2>
               <p>I'm vegetarian</p>
             </PersonalCard>

             <PersonalCard>
               <Beach width="100px" />
               <h2>Living la vida loca</h2>
               <p>Mucho importante</p>
             </PersonalCard>

             <PersonalCard>
               <Graduate width="100px" />
               <h2>Finished study</h2>
               <p>Software Development</p>
             </PersonalCard>

             <PersonalCard>
               <Barbell width="100px" />
               <h2>Fitness | Boxing | Soccer</h2>
               <p>We aren't made to sit all day</p>
             </PersonalCard>

             <PersonalCard>
               <Joystick width="100px" />
               <h2>Gaming</h2>
               <p>My nickname is usually Alpakash</p>
             </PersonalCard>
           </Wrapper>
         </>
       );
