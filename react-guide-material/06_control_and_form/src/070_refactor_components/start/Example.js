import { useState } from "react";
import Animals from "./components/Animals"
import AnimalFilter from "./components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const filteredAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterVal={filterVal} setFilterVal={setFilterVal}/>
      <Animals animals={filteredAnimals} />
    </>
  );
};

export default Example;
