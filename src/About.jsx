import React from 'react'
import Common from './Common';
import comp from '../src/images/comp.jpg';
export const About = () => {
    return (
        <>
          <Common name='Welcome to About page' heading='We have team of experianced developers' imgsrc={comp} visit='/contact' btname='Contact Now' />
          </>
    )
}
export default About;
  