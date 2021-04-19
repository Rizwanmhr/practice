// import React from "react";


// const List = (props) => {
//     return (
//     <div>
//     <div className="list">

    
//     <li> {props.text} </li>
    
//     </div>
//     </div>
//     ) ;
// };
// export default List;
import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import EditIcon from '@material-ui/icons/Edit';
const List = (props) => {
    return( 
    <>
    <div className="todo-style">
    <CancelIcon onClick={()=>{
        props.onSelect(props.id);
    }}/>
    <EditIcon />
    
    <li>{props.text}</li>
    </div>
    </>
    );
};
export default List;
