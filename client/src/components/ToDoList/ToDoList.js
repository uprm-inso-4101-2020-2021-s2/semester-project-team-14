import React, { useState } from 'react';
import styles from './TodoList.module.css';
import TodoForm from '../TodoForm/TodoForm';
import Todo from '../Todo/Todo';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });
  const addTodo = (todo) => {
    //this if statement prevent the user to submit empty todos to the list
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
  };
  const editTodo = (newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((todo) => (todo.id === newValue.id ? newValue : todo))
    );
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id != id);
    setTodos(newTodos);
  };
  const clearList = () => {
    setTodos([]);
  };
  return (
    <div className={styles.container}>
      <TodoForm addTodo={addTodo} edit={edit.id} />
      <Todo
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        edit={edit}
        setEdit={setEdit}
      />
      {todos.length > 0 ? (
        <button onClick={clearList} className={styles.clearButton}>
          Clear List
        </button>
      ) : null}
    </div>
  );
};

export default TodoList;
