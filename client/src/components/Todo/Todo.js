import React, { useState, useRef, useEffect } from 'react';
import styles from './Todo.module.css';
import { GrEdit } from 'react-icons/gr';
import { ImCross } from 'react-icons/im';

const Todo = ({ todos, deleteTodo, edit, setEdit, editTodo }) => {
  const [editInput, setEditInput] = useState('');
  const handleEditSubmit = (e) => {
    e.preventDefault();
    editTodo({ id: edit.id, text: editInput });
    setEdit({
      id: null,
      text: '',
    });
    setEditInput('');
  };
  return todos.map((todo, index) =>
    edit.id === todo.id ? (
      <form key={index} className={styles.formContainer}>
        <input
          type='text'
          value={editInput}
          onChange={(e) => setEditInput(e.target.value)}
          placeholder='Leave blank to make no changes'
        />
        <button onClick={handleEditSubmit}>Edit Todo</button>
      </form>
    ) : (
      <div className={styles.todosContainer} key={index}>
        <div className={styles.todoText} key={todo.id}>
          {todo.text}
        </div>

        <GrEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className={styles.iconsEdit}
        />
        <ImCross
          className={styles.iconsCross}
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    )
  );
};

export default Todo;
