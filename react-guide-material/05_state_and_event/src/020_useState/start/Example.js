import { useState } from "react";

const Example = () => {

  const [text, setText] = useState("");

  const fn = (e) => {
    setText(e.target.value);
  }

  return (
    <>
      <input type="text" onChange={fn}/>=<span>{text}</span>
    </>
  );
};

export default Example;
