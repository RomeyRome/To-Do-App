import { Button, Input, List } from "antd";
import React, { FC, useState, useEffect } from "react";
import TodoForm from "../../atoms/TodoForm";
import TodoItem, { ITodoItem } from "../../atoms/TodoItem";

export interface TodoAppProps { }

const TodoApp: FC<TodoAppProps> = ({ }) => {
  const [counter, setCounter] = useState(1);
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const onDone = (itemId: string) => {
    const tempList = todoList.map((item) => {
      if (item.id === itemId) item.status = "Done";
      return item;
    });
    setTodoList([...tempList]);
  };

  const onRemove = (itemId: string) => {
    const tempList = todoList.filter((item) => {
      return item.id !== itemId;
    });
    setTodoList([...tempList]);
  };

  const onAdd = (description: string) => {
    const tempItem: ITodoItem = {
      id: counter.toString(),
      description: description,
      status: "Pending",
    };
    setTodoList([...todoList, tempItem]);
    setCounter(counter + 1);
  };

  return (
    <div className="todoContainer" >
      <h1 className="mb-20 mt-3 text-5xl text-teal-600 underline font-mono text-lg">TODO App</h1>
      <TodoForm handleAdd={onAdd} />
      {todoList.map((todoItem, index) => {
        return (
          <TodoItem
            key={index}
            id={todoItem.id}
            description={todoItem.description}
            status={todoItem.status}
            createdAt={todoItem.createdAt}
            handleDone={onDone}
            handleRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default TodoApp;
