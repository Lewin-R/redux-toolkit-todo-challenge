import { FC } from "react";
import { useAppDispatch } from "../store/store";
import { TodoModel } from "../TodoModel";
import { Checkbox } from "./Checkbox";

export interface TodoProps {
  entityId: string;
  position: number;
  title: TodoModel["title"];
  priority: TodoModel["priority"];
  isDone?: TodoModel["isDone"];
}

export const Todo: FC<TodoProps> = ({
  entityId,
  position,
  title,
  priority,
  isDone,
}) => {
  //TODO: Dispatch an action
  const dispatch = useAppDispatch();

  return (
    <tr>
      <td>{position}</td>
      <td>{title}</td>
      <td>{priority}</td>
      <td>
        <Checkbox isChecked={isDone} onChange={handleChange} />
      </td>
    </tr>
  );
};
