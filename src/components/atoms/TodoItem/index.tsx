import { Button, List } from "antd";
import React, { FC } from "react";
import { CloseCircleFilled, CheckCircleTwoTone } from '@ant-design/icons';

export interface ITodoItem {
  id: string;
  description: string;
  status: "Done" | "Pending";
  createdAt?: number;
}

export interface TodoItemProps extends ITodoItem {
  handleDone: (id: string) => any;
  handleRemove: (id: string) => any;
}

const TodoItem: FC<TodoItemProps> = ({
  id,
  description,
  status,
  createdAt,
  handleDone,
  handleRemove,
}) => {
  return (
    <div className="toDoItem-container">
      <div className={`flex space-x-4 ... ${status === 'Done' ? "completed" : ''}`}>
        <div className="flex-1 ..." >
          <div className="flex flex-row ..." style={{ paddingTop: "1em" }}>
            {/* <div>{id}</div> */}
            <div>
              {status === "Done" ? <CheckCircleTwoTone style={{ marginRight: "1em", fontSize: '2em', color: '#10b981' }} /> : null}
            </div>
            <div className="todo-description">Description: {description}</div>
          </div>
        </div>
        <div className="flex-2 ...">
          <div className="inline-block ...">
            {status === "Pending" ? <button
              type="button"
              className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline"
              onClick={() => {
                handleDone(id);
              }}
            >
              Mark as Done
          </button>
              : null}
          </div>
          <div className="inline-block ...">
            <button
              type="button"
              className="border border-red-500 text-red-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-red-600 focus:outline-none focus:shadow-outline"
              // icon={<DeleteOutlined />}
              // className="todo-action-button"
              onClick={() => {
                handleRemove(id);
              }}
            >
              {/* <CloseCircleFilled /> */}
              Remove
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
