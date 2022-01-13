import React from "react";
import Page from './Pages.css';

const ToDoList = (props) =>{
    
    return(
        <>
            <div className="todo_style">
            <i class="fa fa-trash" aria-hidden="true" 
                onClick={()=> {
                    props.onSelect(props.id);
                }}
            />
            <li> {props.text} <br /> </li>
            </div> 
        </>
    );

};

export default ToDoList;