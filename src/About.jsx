import React from "react";
import web from "../src/Images/mar.jpg"
import {NavLink} from "react-router-dom";
import Common from "./Common";
const About = () => {
    return(
        <>
        <Common name='Welcome to About page' imgsrc={web} visit='/contact' btname='Contact Now' heading='We have team of talented developer making websites' />
       </>

    );
};
export default About;