import { FC, useId, useState } from "react";
import { useAppDispatch } from "../store/store";

export const Form: FC = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(1);

  //TODO: Dispatch an action
  const dispatch = useAppDispatch();

  return (
    <form onSubmit={handleSubmit}>
      <div className="card-body">
        <label htmlFor="<<TODO>>">Title</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter a title ..."
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <label htmlFor="<<TODO>>">Priority</label>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="number"
            min="1"
            max="5"
            placeholder="Enter a priority from 1 - 5 ..."
            onChange={(event) => setPriority(Number(event.target.value))}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Task
        </button>
      </div>
    </form>
  );
};
