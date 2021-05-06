// import React, {useState} from "react";


// import List from "./List";
// let Todo = () => {
//     const [inputList, setInputList] = useState("");
//     const [item,setItem] = useState([]);
//     const itemEvent = (event) => {
//         setInputList(event.target.value);
//     };
//     const listofItems = () => {
//         setItem((oldItems) => {
//             return[...oldItems, inputList]
//         });
//         setInputList("");

//     };
// return(
// <div>
// <div className="main_div">
// <div className="center_div">
//     <br />
//     <h1>ToDo List</h1>
//     <br />
//     <input type="text" placeholder="Add a Items" 
//     value={inputList}
//     onChange={itemEvent}/>
//     <button onClick={listofItems}> + </button>
//     <ol>
//         {/* <li> {inputList} </li> */}
//         {item.map((Itemval) => {
//             return <List text={Itemval} />;
//         })}
//     </ol>
// </div>
// {/* hy */}
// {/* hy */}
// {/* hy */}

// </div>

// </div>


// );
// };
// export default Todo;

import React, {useState} from "react";

import Button from '@material-ui/core/Button';

import AddIcon from '@material-ui/icons/Add';

import List from "./List";
const Todo = () => {
    const [item, setItem] = useState("");
    const [newItem, setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    const listofItems = () => {
        setNewItem((preValue) => {
return [...preValue, item];
        });
        setItem(" ");
    };
    const deleteItems = (id) => {
        console.log("deleted");
        setNewItem((preValue) => {
            return preValue.filter((arrElem, index) => {
            return index !== id;
            });
        });
    };
return(
    <div>
        <div className="main_div">
            <div className="center_div">
            <br />
            <h1>ToDo List</h1>
            <br />
            <input type="text" value = {item} placeholder="add an items" onChange={itemEvent}/>
            <Button className="newBtn" onClick={listofItems}>
              <AddIcon />
            </Button>
            <br />
            <ol>
                
                {newItem.map((val,index) => {
                    return( <List key={index}
                    id = {index} text = {val}
                    onSelect = {deleteItems} />
                    );
                })}
                
            </ol>
<br />
            </div>
        </div>
    </div>
);
};
export default Todo;

