import Todo from "./components/Todo";
import { useState } from "react";

const Example = () => {

  // 入力したタスクを格納。
  const [enteredTodo, setEnteredTodo] = useState(Todo);

  const addTodo = () => {
    const newTodo = {
      id: Math.floor(Math.random() * 101),
      content: enteredTodo
    }

    setEnteredTodo(newTodo);
  }

  return (
    <>
      <h2>Reminder</h2>
     <Todo />
    </>
  );
};

export default Example;
