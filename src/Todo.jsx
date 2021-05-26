import React, {useState} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const Todo = () => {
    const [inputData, setInputData] = useState();
    const [items, setItems] = useState([]);
    const addItem = () => {
        if(!inputData){

        }else{
            setItems ([... items, inputData]);
            setInputData('');
        }
        
    }
    const deleteItem = (id) => {
const updateItems = items.filter((elem,ind) => {
    return ind !== id;
})
setItems(updateItems);
    }
    return (
        <>
           <input type='text' placeholder='write something' value={inputData} onChange={(e)=> setInputData(e.target.value)} />
           <Button> 
           <AddIcon onClick={addItem} />
           </Button>
           {
               items.map((elem, ind) => {
                   return(
                       <>
                       <h1> {elem} </h1>
                       <Button>
               <DeleteOutlineIcon onClick={()=>deleteItem(ind)} />
           </Button>
           <Button>
               <EditIcon />
           </Button>
                       </>
                   )
               })
           }
           
           

        </>
    )
}

export default Todo;
