import { useState } from "react"

const Form = ({todos, setTodos}) => {

    const [value, setValue] = useState("");

    const addTodo = (e) => {
        e.preventDefault(); // ブラウザのデフォルト動作が無効化される。
        const newTodo = {
            id: Math.floor(Math.random() * 100),
            content: value
        }

        setTodos([...todos, newTodo]);
        setValue("");
    }

    return (
    <div>
        <form onSubmit={addTodo} >
        <input type="text" value={value} onChange={ (e) => setValue(e.target.value) }/>
        <button>追加</button>
        </form>
    </div>
    )
}

export default Form;

