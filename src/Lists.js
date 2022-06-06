import { useState } from "react";
import Addlist from "./Addlist";
const Lists = () => {

    const [lists,setLists] = useState([
        {
            id:1,
            completed: true,
            course:"HTML"
        },
        {
            id:2,
            completed:false,
            course:"CSS3"
        },
        {
            id:3,
            completed:true,
            course:"JavaScript"
        }
    ]);

    const checkBoxHandler = (id) => { 
        const checkVerify = lists.map((list) => list.id ===id ? {...list,completed:!list.completed}:list);
        setLists(checkVerify);
    }

    const deleteBtnHandler = (id) =>{
        const deleteBtn = lists.filter((list) => list.id !==id);
        setLists(deleteBtn);
    }

    const [newlist,setNewList] = useState('');

    const addNewList = (course) =>{
        const id = lists.length ? lists[lists.length -1].id + 1: 1;
        const addNew = {id, completed:false, course};
        const addNewElement = [...lists, addNew];
        setLists(addNewElement);
    }

    const submitHandler = (e) =>{
     e.preventDefault();
     addNewList(newlist);
     setNewList('');
    }

    return (
        <>
        <div className="addNew">
            <Addlist newlist={newlist} setNewList={setNewList} submitHandler={submitHandler}/>
        </div>  
        
        <ul>
            {lists.map((list) => (
              <li className="lists" key={list.id}>
                 <input type="checkbox" checked={list.completed} onChange={() => checkBoxHandler(list.id)}/>
                 <label>{list.course}</label>
                 <button type="button" onClick={() => deleteBtnHandler(list.id)}>Delete</button>
              </li>  
            ))}
        </ul>

        </>

    )
}

export default Lists