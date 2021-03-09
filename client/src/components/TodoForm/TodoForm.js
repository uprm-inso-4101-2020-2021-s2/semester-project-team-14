import React, { useEffect, useRef, useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
    addTodo({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput('');
  };

  return (
    <form className={styles.container}>
      <input
        ref={inputRef}
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
