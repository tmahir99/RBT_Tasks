'use client'

import { useEffect, useState } from 'react';

const fetchTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json();
  return data;
};

const IndexPage = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(data => setTodos(data));
  }, []);

  return (
    <div>
      <h1>Todos</h1>
        {todos.map(todo => (
            <span>{todo.title}</span>
        ))}
    </div>
  );
};

export default IndexPage;
