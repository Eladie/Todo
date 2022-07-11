import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";
import App from "../../App";

const TodoItem = (props) => {
  //  const [onCheck, setOnCheck] = useState(props.completed)

  const handleCheckboxChange = (id) => {
    const newArr = props.addNewTodo.map((item) => {
      if( item.id === id) {
        return {
          ...item,
          completed:false,
        }
      }
      return item;
  })
    console.log(newArr);
  };


  return (
    <div className={`todo-item ${props.completed && "todo-completed"}`}>
      
      {/* {props.todoList.map((item) => ( */}
          <div className="todo-item-header">
            <div className="title-area">
              <Checkbox
                checked={!!props.completed}
                onChange={handleCheckboxChange}
              />

              <h4>{props.title}</h4>
            </div>
            <div>
              <i className="fa fa-pencil" aria-hidden="true"></i>
              <i className="fa fa-trash" aria-hidden="true"></i>
            </div>
          </div>

          <div className="separator"></div>

          <p>{props.description}</p>
      {/* ))
      } */}
    </div>
  );
};

export default TodoItem;
