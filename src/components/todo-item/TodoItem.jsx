import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";
import { useEffect } from "react";

const TodoItem = (props) => {
  const { id, title, description, completed } = props.data;
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (value) => {
    props.onCheck(value, id);
  };

  const handleClickdelete = () => {
    props.onClick(id)
  }

  const openModal = () => {
    setIsOpen(true);
  }


  return (
    <div className={`todo-item ${completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox checked={!!completed} onChange={handleCheckboxChange} />
          <h4>{title}</h4>
        </div>

        <div>
          <i onClick={openModal} className="fa fa-pencil" aria-hidden="true"></i>
          <i onClick={handleClickdelete} className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
      <div className="separator"></div>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
