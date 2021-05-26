import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Practice = () => {
    return(
<>
<div className='container'>
<div className='row'>
<div className='col-xl-4 bg-danger'> Hello World </div>
<div className='col-xl-4 bg-success'>Hello World</div>
<div className='col-xl-4 bg-warning'>Hello World</div>
</div>
<br />
<div className='row'>
<div className='col-xl-4 col-lg-4 bg-danger'> Hello World </div>
<div className='col-xl-4 col-lg-4 bg-success'>Hello World</div>
<div className='col-xl-4 col-lg-4 bg-warning'>Hello World</div>
</div>
<br />
<div className='row'>
<div className='col-xl-4 col-lg-4 col-sm-4 bg-danger'> Hello World </div>
<div className='col-xl-4 col-lg-4 col-sm-4 bg-success'>Hello World</div>
<div className='col-xl-4 col-lg-4 col-sm-4 bg-warning'>Hello World</div>
</div>
<br />
<div className='row'>
<div className='col-xl-4 col-lg-4 col-sm-4 col-md-4 bg-danger'> Hello World </div>
<div className='col-xl-4 col-lg-4 col-sm-4 col-md-4 bg-success'>Hello World</div>
<div className='col-xl-4 col-lg-4 col-sm-4 col-md-4 bg-warning'>Hello World</div>
</div>

</div>
</>
    );
};
export default Practice;