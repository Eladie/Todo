import React, { useState } from "react";
import "./TodoItem.css";
import Checkbox from "../checkbox/CheckBox";

const TodoItem = (props) => {
  const { id, title, description, completed } = props.data;

  const handleCheckboxChange = (value) => {
    props.onCheck(value, id);
  };

  return (
    <div className={`todo-item ${completed && "todo-completed"}`}>
      <div className="todo-item-header">
        <div className="title-area">
          <Checkbox checked={!!completed} onChange={handleCheckboxChange} />
          <h4>{title}</h4>
        </div>

        <div>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>
      </div>
      <div className="separator"></div>
      <p>{description}</p>
    </div>
  );
};

export default TodoItem;
