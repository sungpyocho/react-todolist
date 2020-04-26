import React from "react";
import "./TodoList.css";

const TodoList = props => {
    return (
        <div className="TodoList-body"> 
        {
            props.items.map((todo, index) => 
            <div className="TodoList-items" key={index} index={index}>
                <button 
                    onClick={() => props.remove(index)}
                    className="TodoList-button"
                >&#9932;</button>
                <span>{todo}</span>
            </div>)
        }
        </div>
    )     
};

export default TodoList;
