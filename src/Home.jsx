import React from "react";
import web from "../src/Images/vs.jpg"
import {NavLink} from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return(
        <>
        <Common name='Grow your business' imgsrc={web} visit='/service' btname='Get Started' heading='We have team of talented developers making websites'  />
        </>

    );
};
export default Home;