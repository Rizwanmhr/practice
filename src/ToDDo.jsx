import React, {useState} from 'react'
import todo from '../src/Images/todo.jpg'
const ToDDo = () => {
  const [inputData, setInputData]   = useState('');
  const [item, setItem]   = useState([]);
  const [toggleSubmit, SetTogglesubmit] = useState(true);
  const [isSetItem, isSetEditItem] = useState(null);
   const addItem = () => {
       if(!inputData){
       }else if(inputData && !toggleSubmit){
        setItem(
            item.map((elem) => {
                if(elem.id === isSetItem){
                    return{...elem, name:inputData}
                }
                return elem;
            })
        )
        SetTogglesubmit(true);
        setInputData('');
        isSetEditItem(null);

       }else{
           const allInputData={id:new Date().getTime().toString(),name:inputData}
        setItem([...item, allInputData]);
        setInputData('');
       }
       }
       const deleteItem = (index) => {
          const updatedItems = item.filter((elem)=>{
              return index !== elem.id; 
          });
          setItem(updatedItems);
       }
       const editItem = (id) => {
const newEditItem = item.find((elem) => {
    return elem.id === id
    
});
SetTogglesubmit(false);
setInputData(newEditItem.name);
isSetEditItem(id);
       }
       
        
   

   
    return (
        <>
        <div className='main-div'>
        <div className='center-div'>
        <div className='todo'>
        <img src={todo} alt='apps' height='100px' width='170px' />
        </div>
        <h1> ToDo List </h1>
        <div className='addItems'>
        <input type='text' placeholder='type Something' value={inputData} onChange={(e)=>setInputData(e.target.value)} />
        
        {
            toggleSubmit ? <i className="fa fa-plus Add-btn" title="Add Item" onClick={addItem}></i> :
            <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
        }
        
        </div>
        <div className='showItem'>
        {

item.map((elem)=>{
return (
    
    <div className='eachItem' key={elem.id}>
<h3> {elem.name} </h3>
<div className='todo-btn'>
<i className="far fa-edit add-btn" title="Edit Item" onClick={()=>editItem(elem.id)}></i>
<i className="far fa-trash-alt add-btn" title="Delete Item" onClick={()=>deleteItem(elem.id)}></i>
</div>
</div>
)
})



        }
        </div>
        

</div>
        </div>

        
          
          
        </>
    )
}

export default ToDDo;
