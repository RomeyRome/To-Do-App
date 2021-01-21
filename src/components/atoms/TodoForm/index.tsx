import { Button, Input } from "antd";
import React, { FC, useState } from "react";

export interface TodoFormProps {
  handleAdd: (description: string) => any;
}

const TodoForm: FC<TodoFormProps> = ({ handleAdd }) => {
  const [description, setDescription] = useState("");

  return (
    <div className="toDoList-container">
      <div className="flex space-x-4 ...">
        <div className="flex-1 ...">
          <Input
            className="todo-input"
            placeholder="What needs to be done?"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div className="flex-2 ...">
          <Button
            type="primary"
            className="addToDoButton"
            disabled={description === ""}
            onClick={() => {
              handleAdd(description);
              setDescription("");
            }}
          >
            Add Todo
        </Button>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
