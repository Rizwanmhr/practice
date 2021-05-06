import React from "react";
import web from "../src/Images/comp.jpg";
import { NavLink } from "react-router-dom";
const Card = () => {
    return(
        <>
       
<div className="col-md-4 col-10 mx-auto">
<div class="card">
  <img className="card-img-top" src={web} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <NavLink to="" class="btn btn-primary" >Go somewhere</NavLink>
  </div>
</div>
</div>

</>

    );
};
export default Card;
