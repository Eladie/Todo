import React, { useState } from "react";
import Input from "./input/Input";
import Card from "../card/Card";
import TextArea from "./input/TextArea";
import Button from "../button/Button";

const emptyformat = {
  title: "",
  description: "",
  completed: false,
};

function CreateTodoCard(props) {
  const [newTodo, setNewTodo] = useState(emptyformat);

  const handleChange = (event) => {
    setNewTodo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.addNewTodo(newTodo);
    setNewTodo(emptyformat);
    console.log(newTodo);
  };

  return (
    <Card>
      <h2>Create Todo</h2>
      <form onSubmit={handleOnSubmit}>
        <Input
          value={newTodo.title}
          name="title"
          onChange={handleChange}
          placeholder="Title"
          type="text"
        />
        <TextArea
          required
          value={newTodo.description}
          name="description"
          onChange={handleChange}
          placeholder="Description"
        />
        <Button type="submit">Create</Button>
      </form>
    </Card>
  );
}

export default CreateTodoCard;
