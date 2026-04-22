import { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [totalAdded, setTotalAdded] = useState(0);

    const addTodo = (text) => {
        setTodos(prev => [...prev, text]);
        setTotalAdded(prev => prev + 1);
    };
    const clearAll = () => {
    setTodos([]);
    setTotalAdded(0);
  };
  


    return (
        <div className="todolist"   >
            <p>Total tasks added: {totalAdded}</p>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <button onClick={() => addTodo('New Task')}>Add Todo</button>
            <button onClick={clearAll}>Clear All</button>
        </div>
    );
}

export default TodoList;