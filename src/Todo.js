import React, {useState} from "react";
import List from "./List";
let Todo = () => {
    const [inputList, setInputList] = useState("");
    const [item,setItem] = useState([]);
    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listofItems = () => {
        setItem((oldItems) => {
            return[...oldItems, inputList]
        });
        setInputList("");

    };
return(
<div>
<div className="main_div">
<div className="center_div">
    <br />
    <h1>ToDo List</h1>
    <br />
    <input type="text" placeholder="Add a Items" 
    value={inputList}
    onChange={itemEvent}/>
    <button onClick={listofItems}> + </button>
    <ol>
        {/* <li> {inputList} </li> */}
        {item.map((Itemval) => {
            return <List text={Itemval} />;
        })}
    </ol>
</div>
{/* hy */}

</div>

</div>


);
};
export default Todo;