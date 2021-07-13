import React from "react";
import classes from "./todoItem.module.css";
const TodoItem: React.FC<{
  text: string;
  deleteHandler: () => void;
}> = (props) => {
  const { text } = props;
  return (
    <>
      <li className={classes.item} onClick={props.deleteHandler}>
        {text}
      </li>
    </>
  );
};

export default TodoItem;
