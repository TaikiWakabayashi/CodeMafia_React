import { useState } from "react";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const toast = useToast();

  const addTodo = (e) => {
    e.preventDefault();

    if(!enteredTodo) {
      toast({
        title: "新しいタスクを入力してください",
        status: "error",
        duration: 2000,
        isCloseable: true
      });
      return;
    }

    const newTodo = {
      id: Math.floor(Math.random() * 1e5),
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <HStack onSubmit={addTodo}>
        <Input
        bgColor="white"
        placeholder="新しいタスク"
        _placeholder={{ opacity: "0.3", color: "gray.500" }}
          type="text"
          size="lg"
          p={3}
          variant="flushed"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <Button
        bgColor="white"
        colorScheme="blue"
        size="md"
        variant="outline"
        px={7}
        type="submit"
        >
          追加
        </Button>
      </HStack>
    </div>
  );
};

export default Form;
