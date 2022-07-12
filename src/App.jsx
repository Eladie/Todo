import React, { useState } from "react";
import Card from "./components/card/Card";
import Input from "./components/create-todo/input/Input";
import TodoItem from "./components/todo-item/TodoItem";
import TextArea from "./components/create-todo/input/TextArea";
import Button from "./components/button/Button";
import CreateTodoCard from "./components/create-todo/CreateTodoCard";
import "./App.css";
import Modal from "./components/modal/Modal";

const TODOS_MOCK = [
  {
    id: "1",
    title: "Todo 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At id illo repellendus non maiores in pariatur aliquam iure fugit amet!",
    completed: false,
  },
  {
    id: "2",
    title: "Todo 2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: false,
  },
  {
    id: "3",
    title: "Todo 3",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
  {
    id: "4",
    title: "Todo 4",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit!",
    completed: true,
  },
];

function App(props) {
  const [todoList, setTodoList] = useState(TODOS_MOCK);
  const [isOpen, setIsOpen] = useState(false);

  const newTodoItem = (newTodo) => {
    setTodoList((prevState) => [
      ...prevState,
      { ...newTodo, id: prevState.length + 1 },
    ]);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onCheck = (value, id) => {
    setTodoList((prevState) =>
      prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: value,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <div className="app-container">
        {/* 
          My Todos
        */}
        <Card>
          <h1>My todos</h1>
          <Button onClick={openModal}>Add +</Button>
          <div className="list-container">
            {todoList
              .filter((item) => item.completed === false)
              .map((item) => (
                <TodoItem key={item.id} data={item} onCheck={onCheck} />
              ))}
          </div>

          <div className="separator"></div>

          <h2>Completed</h2>
          <div className="list-container">
            {todoList
              .filter((item) => item.completed === true)
              .map((item) => (
                <TodoItem key={item.id} data={item} onCheck={onCheck} />
              ))}
          </div>
        </Card>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <CreateTodoCard addNewTodo={newTodoItem} />
      </Modal>
    </div>
  );
}

export default App;
