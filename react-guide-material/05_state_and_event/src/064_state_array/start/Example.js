import {useState} from "react";

const Example = () => {
  const numArray = [1, 2, 3, 4, 5];

  const [array, setArray] = useState(numArray);

  const shuffle = () => {
   const newArray = [...array]; 
   const value = newArray.pop();
   newArray.unshift(value);
   setArray(newArray);
  }
  return (
    <>
      <h1>{array}</h1>
      <button onClick={shuffle}>shuffle</button>
    </>
  );
};

export default Example;
